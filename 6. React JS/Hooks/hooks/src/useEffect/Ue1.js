import React, { useState, useEffect } from 'react';

// useState 1st Variation - no optional dependency array is passed  
// It runs after every render
function Ue1() {
    console.log('render');
    useEffect(() => {
        console.log('useEffect');
        document.title = `Clicked ${count} times`;
    })

    const [count, setCount] = useState(0);
    return (
        <>
            <p>You clicked the button {count} times</p>
            <button onClick={() => { setCount(count + 1) }}>Click</button>
        </>
    );
}

export default Ue1;