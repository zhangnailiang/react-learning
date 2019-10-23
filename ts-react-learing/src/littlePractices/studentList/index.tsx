import * as React from 'react';
import PropTypes from "prop-types"

/**
 * 学生列表的组件
 */
export default function StudentList({ stus }: any) {
    const list = stus.map((item: any) => (
        <li key={item.id}>{item.name}, {item.sex === 1 ? "男" : "女"}</li>
    ))
    return (
        <ul>
            {list}
        </ul>
    )
}
StudentList.defaultProps = {
    stus: [],
}
StudentList.propTypes = {
    stus: PropTypes.array.isRequired
}
