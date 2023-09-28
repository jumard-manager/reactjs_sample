import { useContext } from "react";
import { RootContext } from "../App";

const CountController = () => {
  const {count, setCount} = useContext(RootContext);

  function countUpDown(flg) {
    if (flg==='+') {
      setCount(count + 1)
    } else {
      setCount(count - 1)
    }
  }

  return (
    <>
      <button onClick={()=>{countUpDown('+')}}>+</button> 
      <button onClick={()=>{countUpDown('-')}}>-</button> 
    </>
  );
}

export default CountController;