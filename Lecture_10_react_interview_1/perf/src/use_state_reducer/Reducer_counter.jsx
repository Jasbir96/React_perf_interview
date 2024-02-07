import React, { useState,useReducer } from 'react'

function Reducer_counter() {
    const intialState = 0;
    // all the possible state mutation
    const reducer = (state, action) => {
        switch (action) {
            case "increment":
                return state + 1;
            case "decrement":
                return state - 1;
            case "IncrementByFive":
                return state + 5;
            case "DecrementByFive":
                return state - 5;
            default:
                return state;
        }
    }
    const [count, dispatch] = useReducer(reducer, intialState);
    // const [count, setCount] = useState(0);

    // const increment = () => {
    //     setCount(count => count + 1);
    // }
    // const decrement = () => {
    //     setCount(count => count - 1);
    // }
    // const incrementBy5 = () => {

    //     setCount(count => count + 5);
    // }
    // const decrementBy5 = () => {
    //     setCount(count => count - 5);

    // }

    return (
        <>
            <h1>Reducer_counter</h1>
            <h3> Count {count}</h3>
            {/* <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={incrementBy5}>+5</button>
            <button onClick={decrementBy5}>-5</button> */}
            <button onClick={() => 
                { dispatch("increment") }}>Increment</button>
            <button onClick={() => { dispatch("decrement") }}>Decrement</button>
            <button onClick={() => { dispatch("IncrementByFive") }}> +five </button>
            <button onClick={() => { dispatch("DecrementByFive") }}> -five </button>
        
        </>
    )
}

export default Reducer_counter