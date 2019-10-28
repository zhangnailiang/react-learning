import * as React from "react"
import { useContext } from "react"

/**
 * createContext 提供的provider和consumer
 */
const ctx = React.createContext({});

function Test() {
    const value = useContext(ctx);
    return (
        <h1>{value}</h1>
    )
}
export default function App() {
    return (
        <div>
            <ctx.Provider value="abc">
                <Test />
            </ctx.Provider>
        </div>
    )
}

