<!-- Context Hook  -->

用于获取上下文数据

<!-- 曾经的消费者和提供模式 -->
import React from "react"

const ctx = React.createContext();

function Test () {
    return (
        <ctx.Consumer>
            {
                (value) => <h1>{value}</h1>
            }
        </ctx.Consumer>
    )
}

export default functioin App () {
    return (
        <div>
            <ctx.Provider>
                <Text />
            </ctx.Provider>
        </div>
    )
}
   <!-- useContext是对这种模式的代替 -->
