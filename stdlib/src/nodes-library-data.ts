import {
  CodeExpression,
  Conditional,
  Debounce,
  Delay,
  GetAttribute,
  GetGlobalState,
  Http,
  InlineValue,
  Interval,
  LoopList,
  SetGlobalState,
  SpreadList,
  Throttle,
} from "./all-browser";
import { Switch } from "./ControlFlow/Switch.flyde";
import { Collect } from "./Lists/Collect/Collect.flyde";

export function getUnresolvedNodesLibraryData() {
  return {
    groups: [
      {
        title: "Control Flow",
        nodes: [Conditional, Switch, LoopList],
      },
      {
        title: "Values & Custom Code",
        nodes: [InlineValue, CodeExpression],
      },
      {
        title: "Objects & Arrays",
        nodes: [GetAttribute, Collect, SpreadList],
      },
      {
        title: "State",
        nodes: [GetGlobalState, SetGlobalState],
      },
      {
        title: "Timing",
        nodes: [Delay, Throttle, Debounce, Interval],
      },
      {
        title: "HTTP",
        nodes: [Http],
      },
    ],
  };
}
