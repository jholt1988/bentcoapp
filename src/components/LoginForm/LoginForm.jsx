import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import { Button, TextField, Divider } from '@mui/material';
import { loginUser } from '../../app/authSlice';





const LoginForm = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { error } = useSelector((state) => state.auth);
    const [isLoading, setIsLoading] = useState(false);
    const {username, password} = props
    const initialValues = {
        username: '', 
       password: ''
    }

    const loginSchema = Yup.object().shape({
        username: Yup.string()
            .required('Username is required'),
        password: Yup.string()
            .required('Password is required')
        
    });

    //Login Handler

  const handleLogin = async (credentials) => {
    try {
      setIsLoading(true);
      await dispatch(loginUser(credentials));
      setIsLoading(false);
      navigate.push('/Account')
    } catch (error) {
      setIsLoading('false')
                
    }
  }
        return (
                 <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            validateOnBlur
            onSubmit={async (values) => {
              const { username, password } = values;
              await handleLogin({username: username, password});
            }}
          >
            <Form className="baseForm" onSubmit={Formik.onSubmit}>
              <header className="baseFormHeader">
                <h1 className="baseFormHeading">Log in</h1>
              </header>
              <TextField
                label="Username"
                name="username"
                id="username-input"
                value={Formik.username}
              />
              <TextField
                label="Password"
                name="password"
                id="password-input"
                type="password"
                value={Formik.password}
              />
              {
                error && <div>{error}</div>
              }
              <Button variant="contained" color="primary" type="submit" isLoading={isLoading}>Submit</Button>
               <p>Forgotten your password?</p>
              <Divider />
              <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                <p>Sign in with</p>
              </div>
              <div className="social-btn-container">
                <Button variant="contained" className="facebook-btn">Facebook</Button>
                <Button variant="contained" className="google-btn">Google</Button>
              </div> 
            </Form>
          </Formik>
  );
}

    

export default LoginForm

