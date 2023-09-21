import React, { useState } from "react";
const Counter = () => {
    // React.useState()
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 5);
    };
    return (
        <>
            <h2>Counter: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </>
    );
};
export default Counter;
