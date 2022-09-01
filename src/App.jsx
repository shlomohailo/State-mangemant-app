import { useReducer } from 'react';
import './App.css'
import { CounterReducer } from './store/counter-reducer/counder-reducer';
import { upAction, downAction, reset, upDateCouter } from './store/counter-action/counder-action'

let initialstate = 0;





function App() {
  const [myState, dispatch] = useReducer(CounterReducer, initialstate);

  return (
    <div className="App">
      <h1>{myState}</h1>


      <button onClick={() => dispatch(upAction())}>UP</button>
      <button onClick={() => dispatch(downAction())}>DOWN</button>
      <button onClick={() => dispatch(reset())}>REST</button>
      <button onClick={() => dispatch(upDateCouter(5))}>up date</button>



    </div>
  )
}

export default App


// let caseArray = ["UP", "DOWN", "REST"]

{/* {caseArray.map((caseItem)=><button onClick={() => dispatch({ type:caseItem })}>{caseItem}</button>)} */ }
