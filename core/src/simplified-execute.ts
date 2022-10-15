import { Part, PartRepo, dynamicOutput, keys, staticPartInput } from ".";
import { execute, ExecuteParams } from "./execute";

export const simplifiedExecute = async (partToRun: Part, repo: PartRepo, inputs: Record<string, any>, otherParams: Partial<ExecuteParams> = {}) => {
   try {
    const output = dynamicOutput();
    const outputName = keys(partToRun.outputs)[0]; 
  
    const _inputs = Object.keys(inputs).reduce((acc, curr) => {
      return {
        ...acc,
        [curr]: staticPartInput(inputs[curr]),
      };
    }, {});

    return new Promise((res, rej) => {
      output.subscribe((data) => {
        res(data);
      });
      execute({
        part: partToRun,
        inputs: _inputs,
        outputs: { [outputName]: output },
        partsRepo: repo,
        onBubbleError: rej,
        ...otherParams
      });
    });
  } catch (e) {
    return Promise.reject(new Error(`Error while executing flow: ${e.message}`));
  }
}