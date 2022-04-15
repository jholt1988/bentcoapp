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
import { BorderAllOutlined, Rowing } from "@mui/icons-material";


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
        <Container sx={{ display: "flex", flexDirection: "column", flexWrap: "wrap", width: "35%", border:5, borderColor:"primary" }}>
            <form onsubmit={onsubmit} sx={{ width: "100%" }}  >
                <div className='registerFormHeader' >
                    <AppRegistrationIcon sx={{
                           fontSize: 125 , ml:90, mr:100}}    color= "secondary"  />
                   
                </div>
                <div className="registerFormBody" justifyContent="center"  >
                
                        <div>
                           <TextField margin="normal" sx={{px:"200" ,width:'80%'}} variant="outlined" label="Username" name="username" id="username"
                                autoComplete="username" value={formik.values.username} onChange={formik.handleChange}/>
                        </div>
                        <div>
                           <TextField margin="normal" sx={{px:"200", width:'80%'}}variant="outlined" label="Email" name="email" id="email"
                                autoComplete="email" value={formik.values.email} onChange={formik.handleChange} />
                        </div>    
                       <div>
                    <TextField margin="normal" sx={{px:"200", width:'80%'}} variant="outlined" label="First Name" name="firstname" id="firstname"
                        autoComplete="firstname" value={formik.values.firstname} onChange={formik.handleChange} />
                       </div>
                      <div>
                     <TextField margin="normal" sx={{px:"200", width:'80%'}} variant="outlined" label="Last Name" name="lastname" id="lastname"
                        autoComplete="lastname" value={formik.values.lastname} onChange={formik.handleChange} />
                    </div>
                    <div>
                     <TextField margin="normal" sx={{px:"200", width:'80%'}}  variant="outlined" label="Password" name="password" id="password"
                               autoComplete="password" value={formik.values.password} onChange={formik.handleChange}/>
                    </div> 
                    <div>
                        <TextField margin="normal" sx={{ px: "200", width: '80%' }}  variant="outlined" label="Verify Password" name="verifypassword" id="verifypassword"
                             
                             autoComplete="verifypassword" value={formik.values.verifypassword} onChange={formik.handleChange}/>  
                    </div>
                        <span>
                        <LocalizationProvider dateAdapter={AdapterMoment}>
                            <Typography variant='h5' color='text.secondary'>Date Of Birth</Typography>
                        <CalendarPicker label="BirthDate" name="birthdate" id="birthdate" value={formik.values.DOB}
                            onChange={formik.handleChange} allowSameDateSelection={false}/>
                    </LocalizationProvider>
                    </span>
                    <span>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="I want to recieve updates, discounts, and other marketing via emal" />
                         <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
                        </FormGroup> 
                    </span>
                    <span sx={{ width:'100%' }}>
                        <Button sx={{mx:100, yx:100 }} size="large" type='Submit' variant='outlined'  >Submit</Button>

                    </span>
                </div>
                

            </form>
        </Container>
    )
}

export default RegisterForm