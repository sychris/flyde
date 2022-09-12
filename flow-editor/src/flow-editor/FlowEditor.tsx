import * as React from "react";
import {
  PinType,
  isGroupedPart,
  Pos,
  GroupedPart,
  CustomPart,
  isCodePart,
  PartInstance,
  FlydeFlow,
  ResolvedFlydeFlowDefinition,
  ImportablePart,
  PartDefRepo,
} from "@flyde/core";
import {
  GroupedPartEditor,
  ClipboardData,
  defaultViewPort,
  GroupEditorBoardData,
  PART_HEIGHT,
} from "../grouped-part-editor/GroupedPartEditor";
import produce from "immer";
import { useHotkeys } from "../lib/react-utils/use-hotkeys";

// ;
import {
  createNewPartInstance,
  domToViewPort,
} from "../grouped-part-editor/utils";

import { HistoryPayload } from "@flyde/remote-debugger";
import { AppToaster, toastMsg } from "../toaster";

import { FlydeFlowChangeType, functionalChange } from "./flyde-flow-change-type";
import { handleCommand } from "./commands/commands";
import { EditorCommand } from "./commands/definition";
import { Omnibar, OmniBarCmd, OmniBarCmdType } from "./omnibar/Omnibar";
import { PromptContextProvider, PromptFunction } from "../lib/react-utils/prompt";

export type FlowEditorState = {
  flow: FlydeFlow;
  boardData: GroupEditorBoardData;
};

const defaultPromptHandler: PromptFunction = async (text, defaultValue) =>
  prompt(`${text}`, defaultValue);

export type FlydeFlowEditorProps = {
  state: FlowEditorState;
  onChangeState: React.Dispatch<React.SetStateAction<FlowEditorState>>;

  resolvedRepoWithDeps: ResolvedFlydeFlowDefinition;

  onImportPart: (part: ImportablePart) => void;
  onQueryImportables?: (query: string) => Promise<ImportablePart[]>;

  onInspectPin: (insId: string, pinId: string, pinType: PinType) => void;

  onRequestHistory: (insId: string, pinId: string, pinType: PinType) => Promise<HistoryPayload>;

  onNewEnvVar?: (name: string, val: any) => void;

  ref?: React.Ref<any>;

  hideTemplatingTips?: boolean;

  promptHandler?: PromptFunction;
};

const maxUndoStackSize = 50;

export type ConstTargetData = {
  ins?: PartInstance;
  pinId?: string;
  pos: Pos;
};

export type DataBuilderTarget = {
  partId: string;
  src: string;
};

const ignoreUndoChangeTypes = ["select", "drag-move", "order-step"];

const resolvedToRepo = (res: ResolvedFlydeFlowDefinition): PartDefRepo => ({
  ...res.dependencies,
  [res.main.id]: res.main
})

export const FlowEditor: React.FC<FlydeFlowEditorProps> = React.memo(
  React.forwardRef((props, ref) => {
    const { state, resolvedRepoWithDeps: resolvedFlow, onChangeState, onImportPart } = props;

    const [undoStack, setUndoStack] = React.useState<Partial<FlowEditorState>[]>([]);
    const [redoStack, setRedoStack] = React.useState<Partial<FlowEditorState>[]>([]);

    const { flow, boardData: editorBoardData } = state;
    const editedPart = state.flow.part;

    const promptHandler = props.promptHandler || defaultPromptHandler;

    const onChangeFlow = React.useCallback(
      (newFlow: FlydeFlow, changeType: FlydeFlowChangeType) => {
        console.log("onChangeFlow", changeType.type);

        if (changeType.type === "functional") {
          setUndoStack([{ flow: newFlow }, ...undoStack.slice(0, maxUndoStackSize)]);
          setRedoStack([]);
        }
        onChangeState((state) => ({ ...state, flow: newFlow }));
      },
      [onChangeState, undoStack]
    );

    const [clipboardData, setClipboardData] = React.useState<ClipboardData>({
      instances: [],
      connections: [],
    });

    const [omnibarVisible, setOmnibarVisible] = React.useState(false);

    const hideOmnibar = React.useCallback(() => setOmnibarVisible(false), []);
    const showOmnibar = React.useCallback(() => setOmnibarVisible(true), []);

    const onChangeEditorBoardData = React.useCallback(
      (partial: Partial<GroupEditorBoardData>) => {
        onChangeState((state) => ({ ...state, boardData: { ...state.boardData, ...partial } }));
      },
      [onChangeState]
    );

    const setEditedPart = React.useCallback(
      (part: CustomPart) => {
        onChangeState((state) => ({ ...state, currentPartId: part.id }));
      },
      [onChangeState]
    );

    // clear board data that isn't related to part when it changes
    React.useEffect(() => {
      onChangeEditorBoardData({
        selected: [],
        viewPort: defaultViewPort,
        from: undefined,
        to: undefined,
        lastMousePos: { x: 0, y: 0 },
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [editedPart.id]);

    useHotkeys(
      "cmd+z",
      (e) => {
        setRedoStack([...redoStack, state]);
        const [last, ...rest] = undoStack;
        if (last) {
          onChangeState((state) => ({ ...state, ...last }));
          setUndoStack(rest);
        }
        e.preventDefault();
      },
      [state, undoStack, redoStack]
    );

    useHotkeys("a", (e) => {
      e.preventDefault();
      showOmnibar();
    });

    const onChangePart = React.useCallback(
      (newPart: GroupedPart, changeType: FlydeFlowChangeType) => {
        const shouldIgnore = ignoreUndoChangeTypes.some((str) => changeType.message.includes(str));
        if (!shouldIgnore) {
          setRedoStack([]);
        }

      
          const changedProject = produce(flow, (draft) => {
            draft.part = newPart;
          });

          onChangeFlow(changedProject, changeType);
      },
      [flow, onChangeFlow]
    );

    const onEditPart = React.useCallback(
      (partId: string) => {
        toastMsg('TODO');
      },
      []
    );

    const commandHandler = React.useCallback(
      (command: EditorCommand) => {
        if (!isGroupedPart(editedPart)) {
          throw new Error(`Impossible state, handling command handler on non grouped part`);
        }

        const newValue = handleCommand(command, {
          flow,
          boardData: editorBoardData,
          currentPartId: editedPart.id,
        });

        onChangeFlow(newValue.flow, functionalChange(command.type));
        onChangeEditorBoardData(newValue.boardData);
      },
      [editedPart, editorBoardData, flow, onChangeFlow, onChangeEditorBoardData]
    );

    const onAddPartInstance = React.useCallback(
      (partId: string, offset: number = -1 * PART_HEIGHT * 1.5) => {
        const newPartIns = createNewPartInstance(
          partId,
          offset,
          editorBoardData.lastMousePos,
          resolvedToRepo(resolvedFlow)
        );
        if (newPartIns) {
          const valueChanged = produce(flow, (draft) => {
            const part = draft.part;
            if (!isGroupedPart(part)) {
              throw new Error(`Impossible state, adding part to non grouped part`);
            }
            part.instances.push(newPartIns);
          });
          onChangeFlow(valueChanged, functionalChange("add-part"));
          hideOmnibar();
          return newPartIns;
        }
      },
      [editorBoardData.lastMousePos, flow, onChangeFlow, hideOmnibar, resolvedFlow]
    );

    const onOmnibarCmd = React.useCallback(
      (cmd: OmniBarCmd) => {
        switch (cmd.type) {
          case OmniBarCmdType.ADD:
            return onAddPartInstance(cmd.data);
          case OmniBarCmdType.ADD_VALUE:
            const pos = domToViewPort(editorBoardData.lastMousePos, editorBoardData.viewPort);
            toastMsg('TODO')
            // return requestNewConstValue(pos);
            break;
          case OmniBarCmdType.CREATE_CODE_PART:
            toastMsg('TODO')
            // onCreateNewPart("code");
            break;
          case OmniBarCmdType.CREATE_GROUPED_PART:
            toastMsg('TODO')
            // onCreateNewPart("grouped");
            break;
          case OmniBarCmdType.IMPORT:
            onImportPart(cmd.data);
            break;
          default:
            AppToaster.show({ intent: "warning", message: "Not supported yet" });
        }
        hideOmnibar();
      },
      [editorBoardData.lastMousePos, editorBoardData.viewPort, onAddPartInstance, hideOmnibar, onImportPart]
    );

    const renderInner = () => {
      if (isCodePart(editedPart)) {
        throw new Error('Impossible state')
        // return <CodePartEditor part={editedPart} onChange={onChangeCodePart} editMode={true} />;
      } else {
        return (
          <React.Fragment>
            <GroupedPartEditor
              insId={`root.${editedPart.id}`}
              ref={ref}
              key={editedPart.id}
              boardData={editorBoardData}
              onChangeBoardData={onChangeEditorBoardData}
              part={editedPart}
              onEditPart={onEditPart}
              // editOrCreateConstValue={editOrCreateConstValue}
              // requestNewConstValue={requestNewConstValue}
              // onGroupSelected={onGroupPart}
              onChangePart={onChangePart}
              resolvedFlow={resolvedFlow}
              // onToggleLog={props.onToggleLog}
              // onToggleBreakpoint={props.onToggleBreakpoint}
              clipboardData={clipboardData}
              onCopy={setClipboardData}
              partIoEditable={!editedPart.id.startsWith("Trigger")}
              onInspectPin={props.onInspectPin}
              onRequestHistory={props.onRequestHistory}
              onRequestImportables={props.onQueryImportables}
              onCommand={commandHandler}
              onShowOmnibar={showOmnibar}
            />

            {omnibarVisible ? (
              <Omnibar
                flow={flow}
                repo={resolvedFlow.dependencies}
                onCommand={onOmnibarCmd}
                visible={omnibarVisible}
                onClose={hideOmnibar}
                onRequestImportables={props.onQueryImportables}
              />
            ) : null}
          </React.Fragment>
        );
      }
    };

    return (
      <div className="project-editor">
        <PromptContextProvider showPrompt={promptHandler}>
          {renderInner()}
        </PromptContextProvider>
      </div>
    );
  })
);
