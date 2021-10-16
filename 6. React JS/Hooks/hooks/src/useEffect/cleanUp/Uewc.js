import React, { useEffect, useState } from 'react';

function Uewc() {
    const [count, setCount] = useState(0);
    console.log('render');

    useEffect(() => {
        console.log('useEffect');
        document.title = `Clicked ${count} times`;
        // cleanUp optional -> runs before a component is unmounted
        return () => {
            alert(`I will be called before the next useEffect is called ${count}`);
        }
    }, [])
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => { setCount(count + 1) }}>Click</button>
        </div>
    );
}

export default Uewc;