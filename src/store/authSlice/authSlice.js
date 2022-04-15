import { accordionDetailsClasses } from "@mui/material";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userLogin, register } from '../../APIs/authAPI';
import {createSelector} from 'reselect'

const loading = {
    IDLE: 'idle', 
    LOADING: 'Loading', 
    SUCCESS: 'Success',
    ERROR: 'Error'
}

export const login = createAsyncThunk('auth/userLogin',
  async  (credentials, thunkAPI) => {
      const response = await userLogin(credentials).then((data) => {
          return { id: data.id, username: data.username };
      })
      console.log(response)
        return response
    })

const registerUser = createAsyncThunk('auth/register',
    (userData, thunkAPI) => {
        const response =  register(userData)
        return response
})

const authSlice = createSlice({
    name: 'auth', 
    initialState: {
        isAuthenticated: false,
        loading: loading.IDLE,
        userid: '',
        username:''
    
    }, 
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.loading=loading.LOADING
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.loading = loading.SUCCESS
            state.isAuthenticated = true
            state.userid = action.payload.id
            state.username = action.payload.username
           
        })
        builder.addCase(login.rejected, (state) => {
            state.loading = loading.ERROR
            state.isAuthenticated=false
        })
        builder.addCase(registerUser.pending, (state) => {
            state.loading=loading.LOADING
        })
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.isAuthenticated = true
            state.loading = loading.SUCCESS
            state.userid = action.payload.id
            state.username = action.payload.userName
        })
        builder.addCase(registerUser.rejected, (state) => {
            state.loading = loading.ERROR
            state.isAuthenticated=false
        })
    }
})



export default authSlice.reducer
 
export const selectUsername = state => state.username
export const selectUserId = state => state.userid

