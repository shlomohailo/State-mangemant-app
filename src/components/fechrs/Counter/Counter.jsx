import { useContext } from "react";
import { counterContext } from "../../contexts/Counter-context";
import { upAction, downAction, reset } from '../../../store/counter-action/counder-action'

function Counter() {
  const { counterState, dispatch } = useContext(counterContext)

  return (
    <div className="counter">
      <h1>Counter</h1>
      <h1>{counterState}</h1>
      <button onClick={() => dispatch(upAction())}>UP</button>
      <button onClick={() => dispatch(downAction())}>DOWN</button>
      <button onClick={() => dispatch(reset())}>REST</button>
    </div>
  );
};

export default Counter;
