import * as React from "react"
import { useState, useMemo } from "react"
class Test extends React.PureComponent<any> {
    render() {
        console.log("Test Render");
        return (
            <div>
                <h1>{this.props.test}</h1>
                <button onClick={() => {
                    this.props.onClick()
                }}>改变文本</button>
            </div>

        )
    }
}
function Parent() {
    console.log("Parent Render");
    const [txt, setTxt] = useState(123);
    const [n, setN] = useState(0);

    const handleClick = useMemo(() => {
        return () => {
            setTxt(txt + 1)
        }
    }, [txt])
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