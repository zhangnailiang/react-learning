import * as React from "react"
import { useState, useMemo } from "react"

function Item(props: any) {
    return (
        <li>{props.value}</li>
    )
}
export default function () {
    const [range,] = useState({
        min: 1,
        max: 10000
    });
    const [n, setN] = useState(0);
    const list: any = useMemo(() => {
        const list: any = [];
        for (let i = range.min; i < range.max; i++) {
            list.push(<Item key={i} value={i} />)
        }
        return list
    }, [range.min, range.max])

    return (
        <div>
            <ul>
                {list}
            </ul>
            <input
                type="number"
                value={n}
                onChange={e => {
                    setN(parseInt(e.target.value, 10))
                }}
            />
        </div>
    )
}