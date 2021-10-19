import React, { useContext } from 'react';
import MyContext from './Context';

function DemoChild() {
    let val = useContext(MyContext);
    console.log(val);

    return (
        <div>
            
        </div>
    );
}

export default DemoChild;