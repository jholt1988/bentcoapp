import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Button, TextField } from '@mui/material'
import { login } from '../../store/authSlice/authSlice'
import { replace, useFormik } from 'formik'
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';


function LoginForm() {
    const [isLoading, setIsLoading] = useState('false');
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const initialValues = {
        username: "",
        password: ""
    };
    const submitLogin = async (credentials) => {
        try {
            setIsLoading('true')
            const {username, password} = credentials
            await dispatch(login({ username, password }))
            navigate('/user/account', {replace: false})
            setIsLoading('false')
        } catch (err) {
            setIsLoading('false');
        }
    }
    let scheme = yup.object().shape({
        username: yup.string().required(),
        password: yup.string().required()
    })
    const formik = useFormik({
        initialValues: initialValues ,
        validationSchema: scheme ,
            
            onSubmit: (values) => {
        const { username, password } = values
        submitLogin({ username, password })
    }
}
)
    

    return (
        
        <Container  >
            
                    <form onSubmit={formik.handleSubmit} >
                        <header>
                            <h1 className="baseFormHeading">Log in</h1>
                        </header>
                        <div>
                            <TextField
                                variant='outlined'
                                id='username'
                                label='Username'
                                autoComplete='username'
                            name='username'
                            value={formik.values.username}
                            onChange={formik.handleChange}
                          
                            
                            />
        
                            <TextField
                                variant='outlined'
                                id='password'
                                label='Password'
                                type='password'
                                name='password'
                            autoComplete='current-password'
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        
                            />
                       
                        </div>
                        <Button type='Submit' variant='contained' loading={isLoading} >Submit</Button>

                    </form>
            
        </Container>

            
    )
}

 export default LoginForm