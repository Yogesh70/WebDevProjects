import React, { useState, useEffect } from 'react';

function Infinite() {
    console.log('render');
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Use Effect');
        let num = Math.random() * 100;
        setCount(num);
    })

    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => { setCount(count + 1) }}>Click</button>
        </>
    );
}

export default Infinite;