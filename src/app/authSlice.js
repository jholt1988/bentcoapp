import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { isLoggedIn, login, register } from "../apis/auth";

export const checkLoginStatus = createAsyncThunk('auth/checkLogin', async (param, thunkAPI) => {
    try {
        const response = await isLoggedIn();

        return {
            cart: response.cart,
            isAuthenticated: true,
            user: response.user,
            profile: response.profile

        }
    } catch (err) {
        throw err
    }
})

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (credentials, thunkAPI) => {
        try {
            const response = await login(credentials);
            return {
                user: response.user,
                profile: response.profile,
                isAuthenticated: true
            }
        } catch (err) {
            throw err;
        }
    }
);

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (credentials, thunkAPI) => {
        try {
            await register(credentials);
            return {};
        } catch (err) {
            throw err;
        }
    }
);


const initialState = {
    isAuthenticated: false,
    isLoading: false,
    error: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(checkLoginStatus.fulfilled, (state, action) => {
            const { isAuthenticated } = action.payload;
            state.isAuthenticated = isAuthenticated;
        })
        builder.addCase((loginUser.fulfilled), (state, action) => {
            const { isAuthenticated } = action.payload;
            state.isAuthenticated = isAuthenticated;
        })
        builder.addCase((loginUser.rejected), (state, action) => {
            const { error } = action.payload
            state.error = error
        })
        builder.addCase((registerUser.fulfilled), (state, action) => {
            const { isAuthenticated } = action.payload
            state.isAuthenticated = isAuthenticated
        })
        builder.addCase((registerUser.rejected), (state, action) => {
            const { error } = action.payload;
            state.error = error
        })

    }
})

export default authSlice.reducer