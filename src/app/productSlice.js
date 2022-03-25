import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {fetchProduct, fetchProducts} from '../apis/products'

export const loadProduct = createAsyncThunk('products/loadProduct',
    async ( productId, thunkAPI ) => {
        try {
            const response = await fetchProduct(productId);
            return {
                product: response
            }
        } catch (err) {
            throw err
        }
    }

)

export const loadProducts = createAsyncThunk('products/loadProducts',
    async (params, thunkAPI) => {
    try {
        const response = await fetchProducts(params);
        return {
            products: response
        }
    } catch (err) {
        throw err
    }
 })

const status = {
    IDLE: "Idle",
    LOADING: "Loading", 
    FULFILLED: "Fulfilled",
    ERROR: "Error"
}

const initialState = {
    products: [], 
    product: {},
    status: status.IDLE   
}

const productSlice = createSlice({
    name: 'products', 
    initialState, 
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase((loadProducts.fulfilled), (state, action) => {
            state.products = action.payload
            state.status = status.FULFILLED
        })
        builder.addCase((loadProduct.fulfilled), (state, action) => {
            state.product = action.payload
        })
    }
})

export default productSlice.reducer