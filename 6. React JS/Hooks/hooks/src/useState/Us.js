import React, { useState } from 'react';

function Us() {
    const [msgObj, setMessage] = useState({ id: 1, message: '' });

    const handleChange = (e) => {
        let val = e.target.value;
        // msgObj.message = val;
        // console.log(msgObj);
        // setMessage({ ...msgObj, message: val }); // way 1

        // way to set State of an Obj with multiple keys in useState() hook
        let obj = { ...msgObj, message: val };
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