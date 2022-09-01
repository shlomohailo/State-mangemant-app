import { createContext,useReducer } from "react"
import {CounterReducer} from '../../store/counter-reducer/counder-reducer'

export const counterContext = createContext()
let initialstate = 0;
export default function CounterProvider({ children }) {
    const [counterState, dispatch] = useReducer(CounterReducer, initialstate);

    return (
        <counterContext.Provider value={{counterState, dispatch}}>
            {children}
        </counterContext.Provider>
    )
}

