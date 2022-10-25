import { loadClientFlow } from '@flyde/runtime/dist/client-loader';
import React, { useEffect, useState } from 'react';
import './App.css';

// import {loadFlow} from '@flyde/runtime';

import flow from './CountersList/CountersList.flyde';
// 
// const execute = loadFlow('./src/CountersList.flyde');

// const runFlow = () => {
  

//   const firstOutputName = keys(flow.main.outputs)[0];

//   return execute({
//     part: flow.main,
//     inputs: inputs,
//     outputs: { [firstOutputName]: output },
//     partsRepo: {...flow.dependencies, [flow.main.id]: flow.main},
//     _debugger: localDebugger,
//     onBubbleError: (e) => {
//       onError(e);
//     },
//     extraContext: {
//       PubSub,
//     },
//   });
// };

const execute = loadClientFlow(flow.resolvedFlow);

const CountersListWrapper: React.FC<{}> = (props) => {

  const [child, setChild] = useState(null);

  useEffect(() => {

    console.log(flow);

    
    const cleanPromise = execute({}, {
      onOutputs: (key, data) => {
        if (key === 'jsx') {
          setChild(data);
        }
      }
    });

    // return () => {
    //   cleanPromise.then((cl) => (cl as any)());
    // }
  }, [])

  return <span>{child}</span>;
}

function App() {
  return (
    <div className="App">
      <h1>Counters List</h1>
      <CountersListWrapper/>
    </div>
  );
}

export default App;
