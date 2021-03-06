import React, { useState } from 'react';
import Demo from './Demo';
import MyContext from './Context';

function Main() {
    console.log('Render');
    const [count, setcount] = useState(0)

    return (
        <div>
            <button onClick={() => { setcount(count + 1) }}>Click</button>
            <MyContext.Provider value={count}>
                <Demo />
            </MyContext.Provider>
        </div >
    );
}

export default Main;