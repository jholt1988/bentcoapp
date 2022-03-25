import API from './client';


export const fetchProduct = async (productId) => {
    try {
        const response = await API.get(`store/${productId}`);

        return response.data
    } catch (err) {
        throw err
    }
}

export const fetchProducts = async (params) => {
    try {
        const response = await API.get(`store/products`)
        
        return response.data
    } catch (err) {
        throw err
    }
}