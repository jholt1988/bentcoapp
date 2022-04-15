import {configureStore} from '@reduxjs/toolkit'
import quoteReducer from "../store/reducers/quoteReducer";
import userReducer from "../store/userSlice/userSlice";
import authReducer from "../store/authSlice/authSlice";
 const store = configureStore({
     reducer: {
           quote:  quoteReducer,
            user: userReducer,
            auth:  authReducer}
     })

  export default store