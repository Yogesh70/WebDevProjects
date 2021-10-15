import React from 'react';

function About({ isAuth }) {
    console.log(isAuth);
    return (
        <h1 style={{ textAlign: 'center' }}>This is About Page Component</h1>
    );
}

export default About;