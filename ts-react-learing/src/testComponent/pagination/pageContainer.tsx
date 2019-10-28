import * as React from "react"
import Pagination from "../../components/pagination"
import MsgList from "./msgList"
import API from "../../servicer/index"
import { useState, useEffect } from "react"

export default function () {
    const [current, setCurrent] = useState(1);
    const [total] = useState(100);
    const [limit] = useState(10);
    const [panelNumber] = useState(5)
    const [numbers, setNumbers] = useState([]);
    const handlePageChange = (e: any) => {
        setCurrent(e)
    }
    useEffect(() => {
        API({
            url: 'http://yapi.demo.qunar.com/mock/17830/api/source/getNameList',
            method: "GET",
            params: {
                "page": 1,
                "current": current
            }
        }).then(res => {
            setNumbers(res.data.data)
        })
    }, [current])
    const pageState = {
        current,
        total,
        limit,
        panelNumber
    }
    return (
        <div>
            <MsgList
                data={numbers}
            />

            <Pagination {...pageState} onPageChange={handlePageChange} />
        </div >
    )
}