import { async } from '@firebase/util';
import React, { useState, useEffect } from 'react';
import firebase from './firebase';

function Demo() {
    console.log(firebase);
    const auth = firebase.auth();
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        try {
            console.log(email + " " + password);
            setLoading(true);
            let res = await auth.signInWithEmailAndPassword(email, password);
            console.log(res.user);
            setUser(res.user);
            setLoading(false);
        }
        catch (error) {
            setError('Failed to sign in');
            setTimeout(() => {
                setError('');
            }, 2000)
            setLoading(false);
        }
    }

    return (
        <div>
            <label>
                Email:
                <input type='text' value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
            </label>
            <label>
                Password:
                <input type='password' value={password} onChange={(e) => { setPassword(e.target.value) }}></input>
            </label>
            <button onClick={handleSubmit}>SignIn</button>
        </div>
    );
}

export default Demo;