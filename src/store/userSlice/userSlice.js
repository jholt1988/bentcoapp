import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import *  as userAPI from "../../APIs/userAPI";

export const loadUser = createAsyncThunk(
    'users/getUser',  async (userId, thunkAPI) =>{
        const response = await userAPI.fetchUserProfile(userId)
        console.log(response)   
        return response.user
    }
)
export const loadProfile = createAsyncThunk(
    'users/getUserProfile', async (userId, thunkAPI) => {
        const response = await userAPI.fetchUserProfile(userId)
        return response.profile
    }
)


export const editProfile = createAsyncThunk(
    'users/updateUserProfile', async(userdata, rejectWithValue ) =>{
        const {id, ...fields} = userdata
        try {
            const response = await userAPI.updateUserProfile(id, fields)
        return response.data.user
    
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    })
        


const loading = {
    loading: 'idle' | 'pending' | 'success' | 'error'
}

const initialState = {
    loading:loading.idle, 
    profileLoading:loading.idle,
    user: {},
    profile:{}
}

const userSlice =  createSlice({
    name: "user", 
    initialState, 
    reducers:{},
    extraReducers: (builder) =>{
        builder.addCase(loadUser.pending, (state) =>{
              state.loading=loading.pending;
        })
        builder.addCase(loadUser.fulfilled, (state, action) =>{
            state.loading=loading.success;
            state.user= action.payload;
        })
        builder.addCase(loadUser.rejected, (state) =>{
            state.loading=loading.error;
        })
        builder.addCase(loadProfile.pending, (state) => {
            state.profileLoading=loading.pending; 
            state.loading=loading.success
            
        })
        builder.addCase(loadProfile.fulfilled, (state, action) => {
            state.profileLoading=loading.success;
            state.profile=action.payload;
            
        }
    )
    builder.addCase(loadProfile.rejected, (state) => {
        state.profileLoading=loading.error
    }
)
}
}) 

const selectUser = (state) => state.state.user

export  {
    selectUser
}

export default userSlice.reducer