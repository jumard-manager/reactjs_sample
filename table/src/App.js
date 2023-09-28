import './App.css';
import { v4 as uuidv4 } from 'uuid';
import {useState} from 'react';

function App() {
  const [datas, setDatas] = useState([{key:'k1',col1:'AAA',col2:'BBB',col3:'CCC'}]);
  const [col1, setCol1] = useState('');
  const [col2, setCol2] = useState('');
  const [col3, setCol3] = useState('');

  const add = () => {
    setDatas(datas.concat({key:uuidv4(),col1:col1,col2:col2,col3:col3}));
  }

  const del = (e) => {
    e.target.parentElement.parentElement.remove();
  }

  return (
    <div className="main">
      <table border="1">
        <thead>
          <tr><th>Column 1</th><th>Column 2</th><th>Column 3</th><th>Delete</th></tr>
        </thead>
        <tbody>
          {
            datas.map((data)=>
            <tr key={data.key}>
              <td>{data.col1}</td>
              <td>{data.col2}</td>
              <td>{data.col3}</td>
              <td><button onClick={(e)=>del(e)} >DEL</button></td>
            </tr>)
          }
        </tbody>

      </table>
      <hr/>
      <input type='text' value={col1} onChange={(e)=>setCol1(e.target.value)} />&nbsp;/&nbsp;
      <input type='text' value={col2} onChange={(e)=>setCol2(e.target.value)} />&nbsp;/&nbsp;
      <input type='text' value={col3} onChange={(e)=>setCol3(e.target.value)} />&nbsp;
      <button onClick={add} >ADD</button>
    </div>
  );
}

export default App;
