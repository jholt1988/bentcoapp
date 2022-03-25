import React, { useState } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import './Login.css';

const Login = (credentials) => {
    const {username, password} = credentials

    return (
        <div className='app'>
            <LoginForm username={username} password={password} />
       </div>
    )
}

export default Login