import * as React from "react";
import classNames from "classnames";

import { Menu, MenuItem, ContextMenu, Tooltip } from "@blueprintjs/core";

import {
  ERROR_PIN_ID,
  fullInsIdPath,
  getInputName,
  getOutputName,
  PinType,
} from "@flyde/core";
import { getPinDomId } from "../dom-ids";
import { calcHistoryContent, useHistoryHelpers } from "./helpers";
import { useDarkMode } from "../../flow-editor/DarkModeContext";
export const PIN_HEIGHT = 23;

export type InputPinViewProps = {
  type: "input";
  onToggleSticky: (id: string) => void;
  isSticky: boolean;
  queueSize?: number;
  queuedValues: number;
};

export type OutputPinViewProps = {
  type: "output";
};

export type PinViewProps = {
  optional?: boolean;
  id: string;
  currentInsId: string;
  ancestorsInsIds?: string;
  selected: boolean;
  connected: boolean;
  minimized: boolean;
  onDoubleClick?: (id: string, e?: React.MouseEvent) => void;
  onShiftClick?: (id: string, e?: React.MouseEvent) => void;
  onClick: (id: string, type: PinType, e?: React.MouseEvent) => void;
  isClosestToMouse: boolean;
  description?: string;
  onToggleLogged: (insId: string, pinId: string, type: PinType) => void;
  onToggleBreakpoint: (insId: string, pinId: string, type: PinType) => void;
  onInspect: (insId: string, pin: { id: string; type: PinType }) => void;

  onMouseUp: (id: string, type: PinType, e: React.MouseEvent) => void;
  onMouseDown: (id: string, type: PinType, e: React.MouseEvent) => void;
} & (InputPinViewProps | OutputPinViewProps);

export interface OptionalPinViewProps {
  options: string[];
  onSelect: (k: string) => void;
}

const INSIGHTS_TOOLTIP_INTERVAL = 500;

export const PinView: React.FC<PinViewProps> = React.memo(function PinView(
  props
) {
  const {
    selected,
    type,
    connected,
    optional,
    currentInsId,
    isClosestToMouse,
    id,
    onMouseDown,
    onMouseUp,
  } = props;

  const { history, resetHistory, refreshHistory } = useHistoryHelpers(
    currentInsId,
    id,
    type
  );

  const dark = useDarkMode();

  const getContextMenu = () => {
    const inspectMenuItem = (
      <MenuItem
        onClick={() =>
          props.onInspect(props.currentInsId, {
            id: props.id,
            type: props.type,
          })
        }
        text={"Inspect"}
      />
    );
    if (props.type === "input") {
      return (
        <Menu>
          <MenuItem
            onClick={() => props.onToggleSticky(props.id)}
            text={"Toggle sticky (square means sticky)"}
          />
          {inspectMenuItem}
        </Menu>
      );
    } else {
      return (
        <Menu>
          {/* {logMenuItem} */}
          {/* {bpMenuItem} */}
          {inspectMenuItem}
        </Menu>
      );
    }
  };

  const onClick = (e: React.MouseEvent) => {
    const { onShiftClick, onClick, id } = props;
    if (e.shiftKey && onShiftClick) {
      onShiftClick(id, e);
    } else {
      onClick(id, type, e);
    }
  };

  const displayName = type === "input" ? getInputName(id) : getOutputName(id);

  const calcClassNames = () => {
    if (props.type === "input") {
      const { isSticky } = props;
      return classNames(
        "pin",
        {
          sticky: isSticky,
          selected,
          closest: isClosestToMouse,
          optional,
          connected,
          // "is-logged": logged,
          // "is-breakpoint": breakpoint,
          minimized: props.minimized,
          dark,
        },
        type
      );
    } else {
      return classNames(
        "pin",
        {
          selected,
          connected,
          closest: isClosestToMouse,
          optional,
          // "is-logged": logged,
          // "has-value": isDefined(runtimeData.lastValues.length)
          minimized: props.minimized,
          "error-pin": id === ERROR_PIN_ID,
          dark,
        },
        type
      );
    }
  };

  const calcTooltipContent = () => {
    const historyContent = calcHistoryContent(
      history,
      type === "input" ? props.queuedValues : undefined
    );

    const maybeDescription = props.description ? (
      <em>{props.description}</em>
    ) : (
      ""
    );

    return (
      <div>
        <div>
          <strong>{displayName}</strong> ({type}){" "}
        </div>
        {maybeDescription}
        <hr />
        {historyContent}
      </div>
    );
  };

  const maybeStickyLabel = () => {
    if (props.type === "input" && props.isSticky) {
      return <span className="suffix">s</span>;
    } else {
      return null;
    }
  };

  const maybeQueueLabel = () => {
    if (props.type === "input" && props.queueSize) {
      return <span className="suffix">{props.queueSize} in Q</span>;
    } else {
      return null;
    }
  };

  const _onMouseDown = React.useCallback(
    (e: React.MouseEvent) => {
      if (e.button === 0) {
        onMouseDown(id, type, e);
      }
    },
    [id, type, onMouseDown]
  );

  const _onMouseUp = React.useCallback(
    (e: React.MouseEvent) => {
      if (e.button === 0) {
        onMouseUp(id, type, e);
      }
    },
    [id, type, onMouseUp]
  );

  return (
    <div className={calcClassNames()} data-pin-id={id}>
      <Tooltip className="pin-info-tooltip" content={calcTooltipContent()}>
        <ContextMenu
          onMouseEnter={refreshHistory}
          onMouseOut={resetHistory}
          onMouseDown={_onMouseDown}
          onMouseUp={_onMouseUp}
          data-tip=""
          data-html={true}
          data-for={id + props.currentInsId}
          id={getPinDomId({
            fullInsIdPath: fullInsIdPath(
              props.currentInsId,
              props.ancestorsInsIds
            ),
            pinId: id,
            pinType: type,
            isMain: false,
          })}
          onDoubleClick={(e) =>
            props.onDoubleClick && props.onDoubleClick(id, e)
          }
          className={classNames(`pin-inner`, { dark })}
          onClick={onClick}
          content={getContextMenu()}
        >
          {displayName} {maybeStickyLabel()}
          {maybeQueueLabel()}
        </ContextMenu>
      </Tooltip>
      <div className="wire" />
    </div>
  );
});
