import React, { Component } from "react";

export default class ClassComponent extends Component {
    componentDidMount(): void {
        console.log("компонент смонтирован");
    }

    componentDidUpdate(
        prevProps: Readonly<{}>,
        prevState: Readonly<{}>,
        snapshot?: any
    ): void {
        console.log("компонент изменен");
    }

    componentWillUnmount(): void {
        console.log("компонент размонтирован");
    }

    render() {
        return <div>ClassComponent</div>;
    }
}
