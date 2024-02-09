
import React, { useState } from "react";
// import React from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("red");


    const Add = () => {
        setCount(count + 1)
        if (count + 1 > 15) {
            setColor("green");
        // }else if(){

        // }
    }
    const Sub = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    const Multi = () => {
        setCount(count * 2)
    }
    const Divi = () => {
        setCount(count / 2)
    }
    return (

        <>
            <button style={{
                backgroundColor: color
            }}>counter_number :- {count}</button>
            <button onClick={Add}>+</button>
            <button onClick={Sub}>-</button>
            <button onClick={Multi}>*</button>
            <button onClick={Divi}>/</button>

        </>

    )
}

export default Counter
