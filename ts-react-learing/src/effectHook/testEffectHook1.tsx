import * as React from 'react';
import { useEffect, useState } from "react"
export default function () {
    const [num, setNum] = useState<number>(0);
    { /*以下操作属于副作用 */ }
    useEffect(() => {
        document.title = `计数器:${num}`
    })
    useEffect(() => {
        document.title = `计数器:${num}`
    })
    return (
        <div>
            <span>{num}</span>
            <button onClick={() => {
                setNum(num + 1)
            }}>+</button>

        </div>
    )
}
