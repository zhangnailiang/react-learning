import * as React from 'react';
import { useState } from "react"
export default function () {
    const [num, setNum] = useState<number>(0);
    const [visible, setVisible] = useState<boolean>(true);

    return (
        <div >
            <p style={{ display: visible ? "block" : "none" }}>
                <button onClick={() => { setNum(num - 1) }}>-</button>
                <span>{num}</span>
                <button onClick={() => { setNum(num + 1) }}>+</button>
            </p>
            <button onClick={() => { setVisible(!visible) }}>显示/隐藏</button>
        </div>
    )
}
