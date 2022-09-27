import * as React from "react";
import classNames from "classnames";
import {
  GroupedPart,
  Pos,
  PartDefRepo,
  getPartDef,
  PartInstance,
  ConnectionNode,
  isInternalConnectionNode,
  isExternalConnectionNode,
  ConnectionData,
} from "@flyde/core";
import {
  calcPinPosition,
  calcMainInputPosition,
  calcMainOutputPosition,
} from "./calc-pin-position";
import { Size } from "../../utils";
// ;
import { calcBezierPath } from "./bezier";

import { useSsr } from 'usehooks-ts'
import { renderedPosToLogicalPos } from "../..";


export interface BaseConnectionViewProps {
  repo: PartDefRepo;
  part: GroupedPart;
  parentInsId: string;
  onDblClick: () => void;
  size: Size;
  boardPos: Pos;
  viewPort: { pos: Pos; zoom: number };
  instances: PartInstance[]; 
}

export interface ConnectionViewProps extends BaseConnectionViewProps {
  connections: ConnectionData[];
  futureConnection?: {connection: ConnectionData, type: "future-add" | "future-remove"};
}

export interface ConnectionItemViewProps extends BaseConnectionViewProps {
  connection: ConnectionData;
  type: 'regular' | 'future-add' | 'future-remove';
}

const calcStartPos = (props: ConnectionItemViewProps): Pos => {
  const { connection, part, size, boardPos, parentInsId } = props;
  const {from} = connection;

  if (isExternalConnectionNode(from)) {
    return calcMainInputPosition(part, size, from.pinId, parentInsId, "input", boardPos);
  } else {
    return calcPinPosition(parentInsId, from.insId, from.pinId, "output", boardPos);
  }
};

const calcTargetPos = (props: ConnectionItemViewProps): Pos => {
  const { connection, part, size, boardPos, parentInsId } = props;
  const {to} = connection;

  if (isExternalConnectionNode(to)) {
    return calcMainOutputPosition(part, size, to.pinId, parentInsId, "output", boardPos);
  } else {
    return calcPinPosition(parentInsId, to.insId, to.pinId, "input", boardPos);
  }
};

export const SingleConnectionView: React.FC<ConnectionItemViewProps> = (props) => {
  const { isBrowser } = useSsr();

  const { connection, part, repo, instances, type, viewPort } = props;
  const {from } = connection;

  const fromInstance = isInternalConnectionNode(from) && instances.find((i) => i.id === from.insId);

  if (!fromInstance && isInternalConnectionNode(from)) {
    throw new Error(`impossible state  - "from instance id - [${from.insId}] does not exist"`);
  }

  const fromPart =
    isInternalConnectionNode(from) && fromInstance ? getPartDef(fromInstance, repo) : part;

  const sourcePin = fromPart.outputs[from.pinId];
  const delayed = sourcePin && sourcePin.delayed;

  const startPos = isBrowser ? calcStartPos(props) : {x: 0, y: 0};
  const endPos = isBrowser ? calcTargetPos(props) : {x: 0, y: 0};

  //transform them into "logical" positions
  const {x: x1, y: y1} = startPos;
  const {x: x2, y: y2} = endPos;

  const cm = classNames("connection", { delayed }, type);

  const bob = calcBezierPath({
    sourceX: x1,
    sourceY: y1,
    targetX: x2,
    targetY: y2,
    curvature: 0.15,
  });

  const strokeWidth = 2 * viewPort.zoom;
  const strokeDasharray = type === 'regular' ?  undefined : 6 * viewPort.zoom;

  const middleX = (x1 + x2) / 2; 
  const middleY = (y1 + y2) / 2;


  return (<React.Fragment>
      <path d={bob} className={cm} style={{strokeWidth, strokeDasharray}}/>
      {type  === 'future-add' ? <text className='label' x={middleX} y={middleY} font-size="12px">Add connection</text> : null }
      {type  === 'future-remove' ? <text className='label' x={middleX} y={middleY} font-size="12">Remove connection</text> : null }
    </React.Fragment>
  );
}

export const ConnectionView: React.FC<ConnectionViewProps> = (props) => {

  const { viewPort, futureConnection } = props;

  const [renderTrigger, setRenderTrigger] = React.useState(0);

  const requestRerender = React.useCallback((count: number) => {

      return requestAnimationFrame(() => {
        setRenderTrigger((r) => (r + 1) % 9);
        if (count > 0) {
          requestRerender(count - 1);
        }
      });
  }, []);

  React.useEffect(() => {
    // re-render 10 times and then stop
    // this is a very ugly hack to make connections render smoothly
    // but for some reason, if this is always on (As in no limit), when the playground
    // is scrolled, connections are rendered wrong
    
    const t = requestRerender(10);
    
    return () => {
      cancelAnimationFrame(t);
    };
  }, [requestRerender]);

  React.useEffect(() => {
    const handler = () => {
      requestRerender(3);
    }
    window.addEventListener('scroll', handler);
    window.addEventListener('resize', handler);

    return () => {
      window.removeEventListener('scroll', handler);
      window.removeEventListener('resize', handler);
    }
  }, [requestRerender, renderTrigger])

  const connectionPaths = props.connections.map(conn => {
    return <SingleConnectionView {...props} connection={conn} type='regular'/>
  });


  if (futureConnection) {
    connectionPaths.push(
      <SingleConnectionView {...props} connection={futureConnection.connection} type={futureConnection.type}/>
    )
  }

  return (
    <span
      className={'connections-view'}
      style={{ opacity: viewPort.zoom }}
      // data-bob={renderTriggser}
      // key={renderTrigger}
    >
      <svg>
        {connectionPaths}
      </svg>
    </span>
  );
};
