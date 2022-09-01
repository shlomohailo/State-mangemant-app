import { useContext,useState } from "react";
import { counterContext } from "../../contexts/Counter-context";
import { upDateCouter } from '../../../store/counter-action/counder-action'

function InputCounter() {
    const { counterState, dispatch } = useContext(counterContext)
    const [num, numSet] = useState(counterState)

    return (
        <div className="counter">
            <h1>Counter</h1>
            <label htmlFor="..."> enter number</label>
            <input type="number" onChange={(e) => numSet(e.target.value)} />
            <button onClick={() => dispatch(upDateCouter(num))}>up date</button>
        </div>
    );
};

export default InputCounter;