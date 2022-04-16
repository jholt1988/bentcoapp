import React from "react";
import { useFormik } from "formik";
import * as yup from 'yup';

import { TextField, Button, Container, Typography, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { Spacing, flexbox } from "@mui/system";
import {createTheme} from "@mui/styles"
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import {LocalizationProvider, CalendarPicker} from '@mui/x-date-pickers'
import moment from 'moment'
import { Stack } from "@mui/material";


function RegisterForm(props) {
    

    const initialValues = {
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '', 
        verifypassword: '',
        DOB: moment.now(), 
        
    }

    const validation = yup.object().shape({
         firstname: yup.string().required(),
        lastname: yup.string().required(),
        username: yup.string().required(),
        email:yup.string().email().required(),
        password:yup.string().required(), 
        verifypassword:yup.string().required(),
        DOB:yup.date().required(), 
    })

    const formik = useFormik({
        initialValues: initialValues, 
        validationSchema:validation
    })


    return (
        <Stack sx={{ display: "flex", flexDirection: "column" , border:5, borderColor:"primary", alignItems:"center", }} >
            <form onSubmit={onsubmit}  >
                <div className='registerFormHeader' >
                    <span sx={{ width:'550' }}>
                    <AppRegistrationIcon sx={{ mx:300,
                            fontSize:"5rem", flexGrow:'2'
                           
                        }} color="secondary" />
                    </span>
                   
                </div>
                <div sx={{px: 600, display:'flex'}} className="registerFormBody">
                
                        
                    <TextField sx={{
                        mx: 60, px: 50, alignItems: 'center' }}margin="normal" variant="outlined" label="Username" name="username" id="username"
                                autoComplete="username" value={formik.values.username} onChange={formik.handleChange}/>
                        
                    
                           <TextField sx={{mx:40, px:50}} margin="normal" variant="outlined" label="Email" name="email" id="email"
                                autoComplete="email" value={formik.values.email} onChange={formik.handleChange} />
                        
                       
                    <TextField  sx={{mx:60, px:50}}margin="normal"  variant="outlined" label="First Name" name="firstname" id="firstname"
                        autoComplete="firstname" value={formik.values.firstname} onChange={formik.handleChange} />
                       
                      
                     <TextField  sx={{mx:40, px:50}}margin="normal"  variant="outlined" label="Last Name" name="lastname" id="lastname"
                        autoComplete="lastname" value={formik.values.lastname} onChange={formik.handleChange} />
                    
                    
                     <TextField sx={{mx:60, px:50}} margin="normal"   variant="outlined" label="Password" name="password" id="password"
                               autoComplete="password" value={formik.values.password} onChange={formik.handleChange}/>
                    
                    
                        <TextField sx={{mx:40, px:50 }} margin="normal"   variant="outlined" label="Verify Password" name="verifypassword" id="verifypassword"
                             
                             autoComplete="verifypassword" value={formik.values.verifypassword} onChange={formik.handleChange}/>  
                    
                    <span>
                        <Typography sx={{px:200}} variant='h6' color='text.secondary'>Date Of Birth</Typography>
                        <LocalizationProvider dateAdapter={AdapterMoment}>
                        <CalendarPicker label="BirthDate" name="birthdate" id="birthdate" value={formik.values.DOB}
                            onChange={formik.handleChange} allowSameDateSelection={false}/>
                    </LocalizationProvider>
                    </span>
                    <span>
                    <FormGroup sx={{mx: 200, yx:200}}>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="I want to recieve updates, discounts, and other marketing via emal" />
                        </FormGroup> 
                    </span>
                    <span>
                        <Button sx={{mx:300, color:"secondary.dark"  }} size="large" type='Submit' variant='outlined' >Submit</Button>

                    </span>
                </div>
                

            </form>
        </Stack>
    )
}

export default RegisterForm