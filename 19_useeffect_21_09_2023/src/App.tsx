import React from "react";
import Counter from "./Components/Counter";
import "./App.css";
import ClassComponent from "./Components/ClassComponent";

function App() {
    return (
        <>
            <Counter initialValue={100} />
            {/* <Counter initialValue={0} />
            <Counter initialValue={10} />
            <ClassComponent /> */}
        </>
    );
}

export default App;
