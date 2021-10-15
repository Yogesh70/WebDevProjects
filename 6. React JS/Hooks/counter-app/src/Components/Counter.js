import React, { useState } from 'react';

function Counter() {
    // In functional component the whole function reRenders (runs again) as the state changes 
    // useState(0) 1st time hi chalta h, On function reRendering it doesn't change value of state to initial state 
    console.log('render');
    // The way state is used in Class Based Components
    // this.state = {
    //     count: 0
    // }
    // this.setState({})

    const [count, setCount] = useState(0);
    // useState returns us a pair of values - current state and a function that can be used to change the current state
    // we pass the initial value of our state to useState() as argument

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <React.Fragment>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
        </React.Fragment>
    );
}

export default Counter;