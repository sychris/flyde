import React, { useEffect, useState } from 'react';
import './App.css';

// import {loadFlow} from '@flyde/runtime';

// const execute = loadFlow('./src/CountersList.flyde');

const CountersListWrapper: React.FC<{}> = (props) => {

  const [child, setChild] = useState(null);

  useEffect(() => {
    // const cleanPromise = execute({}, {
    //   onOutputs: (key, data) => {
    //     if (key === 'jsx') {
    //       setChild(data);
    //     }
    //   }
    // });

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
