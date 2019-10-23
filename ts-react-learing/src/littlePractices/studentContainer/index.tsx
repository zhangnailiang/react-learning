import * as React from 'react';
import { useState, useEffect } from "react"
import StudentList from "../studentList/index"
import API from "../../servicer/index"
/**
 * 学生列表的组件
 */
export default function () {
    const [student, setStudent] = useState([]);
    const [page, setPage] = useState(1)
    useEffect(() => {
        API({
            url: 'http://localhost:3000/test1.json',
            method: "GET",
            params: {
                page
            }
        }).then(res => {
            setStudent(res.data.data)
        })
        // 表示配置 page 变化的时候发生改变
    }, [page])

    return (
        <div>
            <StudentList stus={student} />
            <input type="number" value={page} onChange={(e) => {
                setPage(parseInt(e.target.value, 10))
            }} />
        </div>
    )
}

