import * as React from "react"
export default function (props: any) {
    return (
        <li>
            [姓名]: {props.data.name}
            &nbsp;&nbsp;
            [年龄]: {props.data.age}
            &nbsp;&nbsp;
            [性别]: {props.data.sex}
        </li>
    )
}