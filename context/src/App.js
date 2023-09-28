import './App.css';
import React, {useState, createContext } from 'react';
import CountViewer from './comps/CountViewer';
import CountController from './comps/CountController';

export const RootContext = createContext({
    count:-1,
    setCount:()=>{console.log('This conponent is outside Context.Provaider!')}
  });

function App() {  
  const [count, setCount] = useState(0);
  return (
    <div className="main">
      <RootContext.Provider value={{count, setCount}}>
        <hr/>
        Inside Provider
        <CountViewer />
        <CountViewer />      
        <CountController />
        <hr/>
      </RootContext.Provider>
      Outside Provider
      <CountViewer />         
      <CountController />
      <hr/>
    </div>
  );
}


export default App;
