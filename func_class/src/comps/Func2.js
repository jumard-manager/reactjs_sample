import {useState} from 'react';
import {useEffect} from 'react';

const Func2 = ({_operator, _getResult, _view}) => {

  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  
  let calcOperator = _operator.toLowerCase();
  let operator = '+';
  let calcVal = 0;

  if (calcOperator === 'plus') {
    operator = '+';
    calcVal = parseInt(left) + parseInt(right);
  } else if (calcOperator === 'minus') {
    operator = '-';
    calcVal = parseInt(left) - parseInt(right);
  } else if (calcOperator === 'multiplication') {
    operator = '×';
    calcVal = parseInt(left) * parseInt(right);
  } else if (calcOperator === 'division') {
    operator = '÷';
    calcVal = parseInt(left) / parseInt(right);
  } else {
    operator = '?';
    calcVal = 0;
  }
  useEffect(()=>_getResult(calcVal));

  if (!_view) return null;
  
  return (
    <>
      {calcOperator.substring(0, 3).toUpperCase()} &nbsp;-&gt;&nbsp;
      <input value={left}  onChange={(e)=>{setLeft(e.target.value)}} />   &nbsp;{operator}&nbsp;
      <input value={right} onChange={(e)=>{setRight(e.target.value)}} />  &nbsp;=&nbsp; 
      {calcVal}
      <br/>
    </>
  )
}

export default Func2;
