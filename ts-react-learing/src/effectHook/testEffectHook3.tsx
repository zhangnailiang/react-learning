import * as React from 'react';
import { useEffect, useState } from "react"
/**
 * 类型问题：
 * 这时候 利用 :any 解决问题
 */
const ref: any = React.createRef();
let timer: any = null;
const txtX: any = React.createRef();
const txtY: any = React.createRef();

/**
 * 一个可以移动的块，该组件每次渲染完成后，始终从0， 0坐标在1秒中内，移动到目标点
 * @param {*} props 
 * props.left 要移动到的目标点横坐标
 * props.right 要移动到目标点纵坐标
 */
function MovableBlock(props: any) {

    useEffect(() => {
        clearInterval(timer)
        const div = ref.current;
        let curTimers = 0;
        const disx = props.left / 100;
        const disy = props.top / 100;
        timer = setInterval(() => {
            curTimers++;
            const newLeft = curTimers * disx;
            const newTop = curTimers * disy;
            div.style.left = newLeft + "px";
            div.style.top = newTop + "px";
            if (curTimers === 100) {
                clearInterval(timer)
            }
        }, 10)
        return stop;
    }, [props.left, props.top])
    return (
        <div ref={ref} style={{
            background: "#f40",
            height: 100,
            width: 100,
            position: "fixed",
        }} />
    )

}
export default function () {
    const [point, setPoint] = useState({ x: 0, y: 0 });
    const [visible, setvisible] = useState<boolean>(false)
    return (

        <div style={{
            paddingTop: 200
        }}>
            {
                visible && (
                    <div>

                        x: <input ref={txtX} type="number" />
                        y: <input ref={txtY} type="number" />
                        <button onClick={() => {
                            setPoint({
                                x: parseInt(txtX.current.value, 10),
                                y: parseInt(txtY.current.value, 10),
                            })
                        }}>确定</button>
                        <MovableBlock left={point.x} top={point.y} />
                    </div>
                )
            }


            <button onClick={() => {
                setvisible(!visible)
            }}>显示/隐藏</button>

        </div >
    )
}