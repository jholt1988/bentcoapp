import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchUser } from '../apis/user';


const getUser = createAsyncThunk(
    'users/fetchUserStatus', 
    async ({ userId, thunkAPI }) => {
        const response = await fetchUser(userId)
        return response.data;
    }
)



const status = {
    IDLE: 'Idle',
    LOADING: 'Loading', 
    FULFILLED: 'Fulfilled',
    ERROR: 'Error'
}

const initialState = {
    status: status.IDLE,
    user: {},
    profile: {}
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        loadUserStart(state) {
            state.user = {};
            state.profile = {};
            state.status = status.LOADING;
        },
        loadUserComplete(state, action) {
            state.user = action.payload;
            state.profile = {};
            state.status = status.LOADING;
        },
        loadProfileStart(state) {
            state.status = status.LOADING
            state.profile = {};
        },
        loadProfileComplete(state, action) {
            state.status = status.FULFILLED;
            state.profile = action.payload;
        },
        loadProfileFailed(state) {
            state.status = status.ERROR
        },
        loadUserFailed(state) {
            state.status = status.ERROR;
            state.user = {};
            state.profile = {};
        },

        createUserStart(state) {
            state.status = status.LOADING;
            state.user = {};
            state.profile = {};
        },
        createUserComplete(state, action) {
            state.status = status.FULFILLED;
            state.user = action.payload;
            state.profile = action.payload;
        },
        createUserFailed(state, action) {
            state.status = status.ERROR;
            state.user = {};
            state.profile = {};
        }
    },
    extraReducers: (builder) => {
        builder.addCase((getUser.fulfilled), (state, action) => {
            state.user = action.payload
        })
    
    }
   
})

export const {
    loadUserStart,
    loadUserComplete, 
    loadUserFailed, 
    loadProfileStart, 
    loadProfileComplete,
    loadProfileFailed
} = userSlice.actions

const selectUser = (state) => state.user
const selectProfile = (state) => state.profile


export default userSlice.reducer

export const getCompleteUser = (userId) => async (dispatch) => {
    try {
        dispatch(loadUserStart());
        const user = await fetchUser(userId);
        dispatch(loadUserComplete(user));
        dispatch(loadProfileStart())
        const profile = await fetchUser(userId);
        dispatch(loadProfileComplete(profile));

        
    } catch (err) {
        dispatch(loadUserFailed);
        dispatch(loadProfileFailed)
    }
}
