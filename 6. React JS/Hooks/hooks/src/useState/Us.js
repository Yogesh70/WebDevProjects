import React, { useState } from 'react';

function Us() {
    const [msgObj, setMessage] = useState({ message: '' });

    const handleChange = (e) => {
        let val = e.target.value;
        // msgObj.message = val;
        // console.log(msgObj);
        // setMessage({ ...msgObj, message: val }); // way 1

        // way 2 
        let obj = { message: val };
        setMessage(obj);
    }

    return (
        <>
            <input value={msgObj.message} onChange={handleChange} type='text' ></input>
            <p>{msgObj.message}</p>
        </>
    );
}

export default Us;