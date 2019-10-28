import * as React from "react"
import { useState, useCallback } from "react"
class Test extends React.PureComponent<any> {
    render() {
        console.log("Test Render");
        return (
            <div>
                <h1>{this.props.test}</h1>
                <button onClick={() => {
                    this.props.onClick
                }}>改变文本</button>
            </div>

        )
    }
}
function Parent() {
    console.log("Parent Render");
    const [txt, setTxt] = useState(123);
    const [n, setN] = useState(0);

    // 保证在依赖项不发生改变的时候其onClick中函数的地址是不发生改变的，
    // 进而保证和子组件相关的参数不发生改变。子组件不重新渲染
    const handleClick = useCallback(() => {
        setTxt(Math.random());
    }, [])
    return (
        <div>
            <Test test={txt} onClick={handleClick} />
            <input
                type="number"
                value={n}
                onChange={(e) => {
                    setN(parseInt(e.target.value, 10))

                }}
            />
        </div>
    )
}
export default function () {
    return (
        <div>
            <Parent />
        </div>
    )
}