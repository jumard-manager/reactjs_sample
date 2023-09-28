import './App.css';
import {useState} from 'react';


import ClassTemp from './comps/ClassTemp';
import Class1 from './comps/Class1';
import Func1 from './comps/Func1';
import Func2 from './comps/Func2';

function App() {
  const [class1, setClass1] = useState(0);
  const [func1, setFunc1] = useState(0);
  const [func2, setFunc2] = useState(0);
  const [isChk1,setIsChk1] = useState(true);
  const [isChk2,setIsChk2] = useState(true);
  const [isChk3,setIsChk3] = useState(true);

  console.log(class1);
  console.log(func1);
  console.log(func2);
  return (
    <div className="main">
      <ClassTemp _title={'Operator (plus / minus / multiplication / division)'} />
      <hr/>
      <Class1 _operator="plus" _getResult={setClass1} _view={isChk1} />
      <Func1 _operator="minus" _getResult={setFunc1} _view={isChk2} />
      <Func2 _operator="multiplication" _getResult={setFunc2} _view={isChk3} />
      <hr/>
      Componet 1 ON/OFF : <input type='checkbox' checked={isChk1} onChange={()=> setIsChk1(state=>!state)} /><br/>
      Componet 2 ON/OFF : <input type='checkbox' checked={isChk2} onChange={()=> setIsChk2(state=>!state)} /><br/>
      Componet 3 ON/OFF : <input type='checkbox' checked={isChk3} onChange={()=> setIsChk3(state=>!state)} />
      <hr/>
    </div>
  );
}

export default App;
