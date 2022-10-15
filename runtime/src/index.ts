import { ExecuteParams, ResolvedFlydeRuntimeFlow, simplifiedExecute } from "@flyde/core";
import { resolveFlow } from "@flyde/resolver";

import  * as findRoot from 'find-root';
import { join } from "path";
import { getCallPath } from "./get-call-path";


export type LoadedFlowExecuteFn<Inputs> = (
  inputs: Inputs,
  extraParams?: Partial<ExecuteParams>
) => void;


const calcImplicitRoot = () => {
  const callPath = getCallPath();
  console.log({callPath});
  return findRoot(callPath);
}

export const loadFlow = <Inputs>(relativePath: string, root?: string): LoadedFlowExecuteFn<Inputs> => {
  const _root = root || calcImplicitRoot();
  const flowPath = join(_root, relativePath)
  const resFlow = resolveFlow(flowPath, "implementation") as ResolvedFlydeRuntimeFlow;
  const main = resFlow.main;

  if (!main) {
    throw new Error("No Main part found");
  }

  return (inputs, params) => simplifiedExecute(main, resFlow.dependencies, inputs, params);
};
