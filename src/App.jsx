import { useReducer } from 'react';
import './App.css'
import { CounterReducer } from './store/counter-reducer/counder-reducer';
import { UP_ACTION,DOWN_ACTION,REST_ACTION } from './store/counter-action/counder-action';

 let initialstate = 0;

 



// let caseArray = ["UP", "DOWN", "REST"]
function App() {
  const [myState, dispatch] = useReducer(CounterReducer, initialstate);

  return (
    <div className="App">
      <h1>{myState}</h1>  
      {/* {caseArray.map((caseItem)=><button onClick={() => dispatch({ type:caseItem })}>{caseItem}</button>)} */}


      <button onClick={() => dispatch(UP_ACTION)}>UP</button>
      <button onClick={() => dispatch(DOWN_ACTION)}>DOWN</button>
      <button onClick={() => dispatch(REST_ACTION)}>REST</button>


    </div>
  )
}

export default App
