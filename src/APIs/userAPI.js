
import API from './client'



    export const fetchUser = async (username)=> {
        const response = await API.get('/user/account', username)
        console.log=(response)
        return response.user;
    }

    export const fetchUserProfile = async (userId) => {
        const response = await API.get('/user/account', userId)
        return response.profile;
    }

    

   export const  updateUserProfile = async (userdata) => {
        const response = await API.put('/user/account', userdata)
        return response.data.user 
    }



