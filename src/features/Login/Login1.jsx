import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import { Button, TextField, Divider } from '@mui/material';

import './Login.css';

import { loginUser } from '../../app/authSlice';

import * as Yup from 'yup';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error } = useSelector(state => state.auth);
  const [isLoading, setIsLoading] = useState(false);

  // Login handler
  const handleLogin = async (credentials) => {
    try {
      setIsLoading(true);
      await dispatch(loginUser(credentials));
      setIsLoading(false);
      navigate.push('/');
    } catch(err) {
      setIsLoading(false);
    }
  }

  const loginSchema = Yup.object().shape({
    username: Yup.string()
      .required("Email address is required"),

    password: Yup.string()
      .required("Password is required")
  })

  return (
    <div className="app">
      <div className="formComp">
        <div className="formWrapper">
          <Formik
            initialValues={{username: '', password: ''}}
            validationSchema={loginSchema}
            validateOnBlur
            onSubmit={async (values) => {
              const { username, password } = values;
              await handleLogin({username: username, password});
            }}
          >
            <Form className="baseForm">
              <header className="baseFormHeader">
                <h1 className="baseFormHeading">Log in</h1>
              </header>
              <TextField
                label="Username"
                name="username"
                id="username-input"
              />
              <TextField
                label="Password"
                name="password"
                id="password-input"
              />
              {
                error && <div>{error}</div>
              }
              <Button variant="contained" color="primary" type="submit" isloading={isLoading}>Submit</Button>
              <p>Forgotten your password?</p>
              <Divider />
              <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                <p>Sign in with</p>
              </div>
              <div className="social-btn-container">
                <Button variant="contained" className="facebook-btn" href="/api/auth/facebook">Facebook</Button>
                <Button variant="contained" className="google-btn" href="/api/auth/google">Google</Button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Login;