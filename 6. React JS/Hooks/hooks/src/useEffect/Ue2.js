import React, { useState, useEffect } from 'react';

// 2nd variation
// Component Did Mount
// 2nd variation - there is presence of dependency array
// empty dependency array
function Ue2() {
    console.log('render');
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("useEffect");
        document.title = `Clicked ${count} times`;
    }, [])
    return (
        <>
            <p>You clicked the button {count} times</p>
            <button onClick={() => { setCount(count + 1) }}>Click</button>
        </>
    );
}

export default Ue2;