import { log } from "console";
import React, { FC, useEffect, useState } from "react";

interface ICounterProps {
    initialValue: number;
}

interface IJson {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}





const Counter: FC<ICounterProps> = ({ initialValue }): JSX.Element => {
    const [count, setCount] = useState<number>(initialValue);
    const [json, setJson] = useState<IJson | null>(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((data) => console.log(data));

        return () => {
            console.log("Компонент размонтирован888");
        };
    }, []);

    useEffect(() => {
        console.log("Компонент обновлен");
    }, [count]);

    // const increment = (): void => {
    //     setCount(count + 1);
    // };

    // const decrement = (): void => {
    //     setCount(count - 1);
    // }

    return (
        <>
            {/* {json && (
                <>
                    {json.userId} {json.id} {json.title} {json.completed}
                </>
            )} */}
            {/* <h1>Counter: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={(): void => setCount(count - 1)}>Decrement</button> */}
        </>
    );
};

export default Counter;
