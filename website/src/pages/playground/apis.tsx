import React, { useCallback, useRef, useState } from "react";

import { dynamicOutput, dynamicPartInput } from "@site/../core/dist";

import {
  PlaygroundTemplate,
  PlaygroundTemplateProps,
} from "./_PlaygroundTemplate/PlaygroundTemplate";

import "@flyde/flow-editor/src/index.scss";
import "./style.scss";

// const bundled = require("./flows/hello-world.bundled.json");
import flow from "./_flows/ApisCombination.flyde";
import { OutputLogs } from "./_OutputLogs/OutputLogs";

const META_DATA = {
  title: "HTTP Requests",
  description: `TODO`,
  key: "api",
  extraInfo: 'TODO'
};


const outputWithSub = (sub: any) => {
  const o = dynamicOutput();
  o.subscribe(sub);
  return o;
};

export default function ReactCounterExample(): JSX.Element {
  const [val, setVal] = useState(4);
  const [fib, setFib] = useState(5);

  const result = useRef(outputWithSub((res) => setFib(res)));

  const inputs = useRef({ n: dynamicPartInput() });

  const [flowProps, setFlowProps] = useState<PlaygroundTemplateProps["flowProps"]>({
    flow: flow.flow,
    resolvedFlow: flow.resolvedFlow,
    inputs: inputs.current,
    output: result.current,
  });


  return (
    <PlaygroundTemplate meta={META_DATA} flowProps={flowProps} defaultDelay={100}>

      <OutputLogs output={result.current}/>
      
    </PlaygroundTemplate>
  );
}
