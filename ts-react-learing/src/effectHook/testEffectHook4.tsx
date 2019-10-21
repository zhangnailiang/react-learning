import * as React from 'react';
import { useEffect, useState } from "react"


export default function () {
    const [n, setN] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            console.log(n);
        }, 3000)
    })
    return (
        <div>
            <h1>{n}</h1>
            <button onClick={() => {
                setN(n + 1)
            }}>n + 1</button>
        </div>
    )
}