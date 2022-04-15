import API from './client';
import bcrypt from 'bcryptjs';



const SALT = 10 





export const  userLogin = async  (credentials) => {
     const {username, password} = credentials
             const response = await  API.post('auth/login', {username, password})
    console.log(response, response.data.id,  response.data.username)
             return  response.data
    
    }
  export const register = async (data) => {
        try {
            const response = await API.post('/auth/register', data)

            return response.data
        }
        catch (err) {
            return err
        }

    
    }
