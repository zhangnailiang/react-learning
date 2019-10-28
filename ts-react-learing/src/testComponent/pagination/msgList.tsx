import * as React from "react"
import StudentList from "./studentList"
import { isArray } from "lodash"
export default function (props: any) {
    return (
        <ul>
            {
                isArray(props.data) && props.data.map((item: any, index: any) => (
                    <StudentList
                        key={index}
                        data={item}
                    />)
                )
            }

        </ul>
    )
}