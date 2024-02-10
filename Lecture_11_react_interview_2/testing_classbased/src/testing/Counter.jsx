import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    const incCount = () => {
        setCount((prevCount) => { return prevCount + 1 })
    }
    const decCount = () => {
        setCount((prevCount) => { return prevCount - 1 })
    }
    return (
        <>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <div>
            <button onClick={incCount} >+</button>
            <button onClick={decCount}>-</button>
            </div>
            
        </>
    )

}
 /***
 * 1. is your component correctly rendered -> default ()
 * 
 * 2. when you interact with it -> it works correctly or not
 *      click + -> 0 -> 1
 *      click - -> 0-> -1
 * **/  



export default Counter