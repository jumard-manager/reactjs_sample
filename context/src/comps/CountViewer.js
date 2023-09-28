import { useContext } from "react";
import { RootContext } from "../App";

const CountViewer = () => {
  const {count} = useContext(RootContext);
  return (
    <>
      <h3>{count}</h3>
    </>
  );
}
export default CountViewer;