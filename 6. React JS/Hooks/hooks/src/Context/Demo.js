import React, { useContext } from 'react'
import MyContext from './Context';
import DemoChild from './DemoChild';

function Demo() {
    const val = useContext(MyContext);
    console.log(val);

    return (
        <div>
            <DemoChild />
        </div>
    );
}

export default Demo;