import React, { useState, useEffect } from 'react';
import './Ue3.css';

// 3rd variation
// non empty dependency array
// dependancy array k andarr 
// runs after those renders that are caused due to state change of the passed values.
function Ue3() {
    console.log('render');
    const [count, setcount] = useState(0);
    const [darkMode, setdarkMode] = useState(false);

    useEffect(() => {
        console.log('useEffect');
        document.title = `Clicked ${count} times`;
    }, [count])

    return (
        <div className={darkMode ? 'view dark-mode' : 'view'}>
            <label htmlFor='dark Mode'>DarkMode</label>
            <input type='checkbox' checked={darkMode} onChange={() => { setdarkMode(!darkMode) }}></input>
            <button onClick={() => { setcount(count + 1) }}>{count}</button>
        </div>
    );
}

export default Ue3;