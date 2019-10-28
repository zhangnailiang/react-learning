import { useState } from "react"
export default function useReducer(reducer: any, initialState: any) {
    const [state, setState] = useState(initialState);
    function dispatch(action: any) {
        const newState = reducer(state, action);
        setState(newState);
    }
    return [state, dispatch]
}