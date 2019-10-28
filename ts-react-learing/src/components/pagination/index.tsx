import * as React from 'react';
import "./style.scss"
/**
 * 分页组件
 * 属性：
 * 1. current： 初始页码
 * 2. total：页码的总数据量
 * 3. limit： 页容量, 每页显示的数量
 * 4. panelNumber： 数字页码最多显示多少个
 * 5. onPageChange: 当页码改变的事件
 */
export default function Pagination(props: any) {

    const totalPageNumber = getTotalPageNumber(props);
    if (totalPageNumber === 0) {
        return null;
    }
    const min: any = getMinNumber(props);
    const max: any = getMaxNumber(min, totalPageNumber, props);
    const numbers = [];
    for (let i = min; i <= max; i++) {
        numbers.push(<span
            key={i}
            onClick={() => { toPage(i, props) }}
            className={props.current === i ? "item-active" : "item"}
        >{i}</span>)
    }
    return (
        <>
            <span
                onClick={() => { toPage(1, props) }}
                className={props.current === 1 ? "item disabled" : "item"}
            >首页</span>
            <span
                onClick={() => {
                    toPage(props.current - 1 < 1 ? 1 : props.current - 1, props)
                }}
                className={props.current === 1 ? "item disabled" : "item"}
            >上一页</span>
            {numbers}
            <span
                onClick={() => {
                    toPage(props.current + 1 > totalPageNumber ? totalPageNumber : props.current + 1, props)
                }}
                className={props.current === totalPageNumber ? "item disabled" : "item"}
            >下一页</span>
            <span
                onClick={() => {
                    toPage(totalPageNumber, props)
                }}
                className={props.current === totalPageNumber ? "item disabled" : "item"}
            >尾页</span>

            <span>{props.current}</span>
            /
            <span>{totalPageNumber}</span>
        </>
    )
}
function toPage(target: any, props: any) {
    if (props.current === target) {
        return
    }
    props.onPageChange && props.onPageChange(target)
}
function getTotalPageNumber(props: any) {
    return Math.ceil(props.total / props.limit);
}
function getMinNumber(props: any) {
    let min = props.current - Math.floor(props.panelNumber / 2);
    if (min < 1) {
        min = 1;
    }
    return min;
}
function getMaxNumber(min: any, totalPageNumber: any, props: any) {
    let max = min + props.panelNumber - 1;
    if (max > totalPageNumber) {
        max = totalPageNumber;
    }
    return max;
}