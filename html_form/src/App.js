import './App.css';
import cld1 from './cloud_1.png';
import cld2 from './cloud_2.png';
import React, {useState, useRef} from 'react';

function App() {

  const [inputText, setInputText] = useState('text');
  const [inputCheckbox, setInputCheckbox] = useState(true);
  const [inputColor, setInputColor] = useState('#e66465');
  const [inputDate, setInputDate] = useState('2023-03-14');
  const [inputDatetimeLocal, setInputDatetimeLocal] = useState('2023-03-14T19:30');
  const [inputEmail, setInputEmail] = useState('abcde@zzzzz.com');
  const [inputImage, setInputImage] = useState(cld1);
  const [inputMonth, setInputMonth] = useState('2023-03');
  const [inputNumber, setInputNumber] = useState(110);
  const [inputPassword, setInputPassword] = useState('password');
  
  const [inputRadio, setInputRadio] = useState('b');
  const radioItems = [{label:'A',value:'a'},{label:'B',value:'b'}];
  const radioElement = radioItems.map((item) => {
    return(
      <div key={item.value}  style={{display:'inline'}}>
        <input type="radio" id={item.value}name='AB' value={item.value} onChange={(e)=>setInputRadio(e.target.value)} checked={item.value === inputRadio} />
        <label htmlFor={item.value}>{item.label}</label>
      </div>
    );
  });

  const [inputRange, setInputRange] = useState(55);
  const [select, setSelect] = useState('a');
  const [textArea, setTextArea] = useState('Line1\nLine2');

  const fileRef = useRef(null);
  const [inputFiles, setInputFiles] = useState([]);

  const upFile = (e) => {
    setInputFiles([]);
    let tmpfiles = inputFiles.concat(e.target.files[0]);
    setInputFiles(tmpfiles);
  }

  const onSubmitEvent = () => {
    alert('Detected onSubmit Event.');
  }

  const onClickButtonEvent = () => {
    alert('Detected onClickButton Event.');
  }

  return (
    <div className="main">
      <hr/>
      <h3>Form</h3>
      <hr/>
      <form onSubmit={onSubmitEvent}>
        <table>
          <thead>
            <tr><th>Type</th><th>Output</th><th>Value</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>input/text</td>
              <td><input type='text' value={inputText} onChange={(e)=>setInputText(e.target.value)} /></td>
              <td>{inputText}</td>
            </tr>
            <tr>
              <td>input/checkbox</td>
              <td><input type='checkbox' checked={inputCheckbox} onChange={()=> setInputCheckbox(state=>!state)} /></td>
              <td>{inputCheckbox.toString()}</td>
            </tr>
            <tr>
              <td>input/color</td>
              <td><input type='color' value={inputColor} onChange={(e)=>setInputColor(e.target.value)} /></td>
              <td>{inputColor}</td>
            </tr>
            <tr>
              <td>input/date</td>
              <td><input type='date' value={inputDate} onChange={(e)=>setInputDate(e.target.value)} /></td>
              <td>{inputDate}</td>
            </tr>
            <tr>
              <td>input/datetime-local</td>
              <td><input type='datetime-local' value={inputDatetimeLocal} onChange={(e)=>setInputDatetimeLocal(e.target.value)} /></td>
              <td>{inputDatetimeLocal}</td>
            </tr>
            <tr>
              <td>input/email</td>
              <td><input type='email' value={inputEmail} onChange={(e)=>setInputEmail(e.target.value)} /></td>
              <td>{inputEmail}</td>
            </tr>
            <tr>
              <td>input/image</td>
              <td><input type='image' src={inputImage} width="20" height="20" alt="18NG" /></td>
              <td><input type='button' value='Change' onClick={()=>{inputImage===cld1?setInputImage(cld2):setInputImage(cld1)}} /></td>
            </tr>
            <tr>
              <td>input/month</td>
              <td><input type='month' value={inputMonth} onChange={(e)=>setInputMonth(e.target.value)} /></td>
              <td>{inputMonth}</td>
            </tr>
            <tr>
              <td>input/number</td>
              <td><input type='number' value={inputNumber} onChange={(e)=>setInputNumber(e.target.value)} /></td>
              <td>{inputNumber}</td>
            </tr>
            <tr>
              <td>input/password</td>
              <td><input type='password' value={inputPassword} onChange={(e)=>setInputPassword(e.target.value)} /></td>
              <td>{inputPassword}</td>
            </tr>
            <tr>
              <td>input/radio</td>
              <td>{radioElement}</td>
              <td>{inputRadio.toString()}</td>
            </tr>
            <tr>
              <td>input/range</td>
              <td><input type='range' min="0" max="99" value={inputRange} onChange={(e)=>setInputRange(e.target.value)} /></td>
              <td>{inputRange}</td>
            </tr>
            
            <tr>
              <td>input/file</td>
              <td><input type='file' ref={fileRef} onChange={upFile}/></td>
              <td>{inputFiles[0]?inputFiles[0].name:'None'}</td>
            </tr>
            <tr>
              <td>input/button</td>
              <td><input type='button' value='Button' onClick={onClickButtonEvent} /></td>
              <td>None</td>
            </tr>
            <tr>
              <td>input/submit</td>
              <td><input type='submit' value='Submit' /></td>
              <td>None</td>
            </tr>
            <tr>
              <td>select</td>
              <td>
                <select value={select} onChange={(e)=>setSelect(e.target.value)}>
                  <option value="a">AAA</option>
                  <option value="b">BBB</option>
                </select>
              </td>
              <td>{select}</td>
            </tr>
            <tr>
              <td>textarea</td>
              <td><textarea value={textArea} onChange={(e)=>setTextArea(e.target.value)} /></td>
              <td>{textArea}</td>
            </tr>
          </tbody>
        </table>
        <hr/>
      </form>    
    </div>
  );
}

export default App;
