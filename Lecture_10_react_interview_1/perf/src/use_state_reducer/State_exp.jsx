import { useState } from "react";
import React from 'react'
function State_exp() {
    const [count, setCount] = useState(0);
    const handleCount = () => {
        setInterval(() => {
            // console.log(count);
            // setCount(count + 1);
            setCount((prevCount) => { return prevCount + 1 });
        }, 1000)
    }
    return (
        <>
            <h3>{count}</h3>
            <button onClick={handleCount}>Increment</button>
        </>
    )
}

export default State_exp