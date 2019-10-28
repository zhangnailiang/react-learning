import * as React from "react"
// import useReducer from "../shouXieuseReducer/index"
import { useReducer } from "react"

/**
 * useReducer 
 * @params： reducer  数据的变化以及其标志type
 * @params:  initialValue  初始值
 * @params:  function  该函数的返回值作为初始值 
 *           使用第三个参数的时候，第二个参数会作为参数传给第三个为函数的参数
 *           const [n, dispatch] = useReducer (reducer, 10, (args) => {
 *                console.log(args); // 10
 *           })
 */
function reducer(state: any, action: any) {
    switch (action.type) {
        case "increase":
            return state + 1;
        case "decrease":
            if (state === 0) {
                return 0
            }
            return state - 1;
        default:
            return state
    }

}
export default function App() {
    const [n, dispatch] = useReducer(reducer, 0);
    return (
        <div>
            <button
                onClick={() => {
                    dispatch({ type: "decrease" })
                }}
            >
                -
            </button>
            <span>{n}</span>
            <button
                onClick={() => {
                    dispatch({ type: "increase" })
                }}
            >
                +
            </button>
        </div>
    )
}