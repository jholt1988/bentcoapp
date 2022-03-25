import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import userReducer from './userSlice';
import productReducer from './productSlice'
import counterReducer from '../features/counter/counterSlice'
const reducer = {
  auth: authReducer,
  user: userReducer,
  counter: counterReducer,
  product: productReducer
}
 const store = configureStore({
  reducer: reducer,
  
});


export default store