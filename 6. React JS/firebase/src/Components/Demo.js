import { async } from '@firebase/util';
import React, { useState, useEffect } from 'react';
import firebase from './firebase';

function Demo() {
    // console.log(firebase);
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
            setError(error.message);
            setTimeout(() => {
                setError('');
            }, 2000)
            setLoading(false);
        }
        setEmail('');
        setPassword('');
    }

    const handleSignOut = async () => {
        try {
            setLoading(true);
            let res = await auth.signOut();
            console.log(res);
            setUser(null);
            setLoading(false);
        }
        catch (error) {
            console.log(error.message);
            setTimeout(() => {
                setError('');
            }, 2000)
            setLoading(false);
        }
    }

    return (
        <>
            {loading ? <h1>Please Wait.....Loading</h1> : user == null ?
                < div >
                    <label>
                        Email:
                        <input type='text' value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
                    </label>
                    <label>
                        Password:
                        <input type='password' value={password} onChange={(e) => { setPassword(e.target.value) }}></input>
                    </label>
                    <button onClick={handleSubmit}>SignIn</button>
                    {error ? <h1>{error}</h1> : <> </>}
                </div> :
                <>
                    <h2>{user.uid} is Signed In</h2>
                    <button onClick={handleSignOut}>Sign Out</button>
                </>
            }
        </>
    );
}

export default Demo;