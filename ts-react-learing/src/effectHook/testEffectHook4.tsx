import * as React from 'react';
import { useEffect, useState } from "react"
import Api from "../servicer/index"
export default function () {
    const [n, setN] = useState(0);
    useEffect(() => {
        Api({
            url: 'https://openapi.waimai.meituan.com/openapi/v1/poilist',
            method: "POST",
            params: {
                longitude: 116491116,
                latitude: 40002102
            }
        })
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