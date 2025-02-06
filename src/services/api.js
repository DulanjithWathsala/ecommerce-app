import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/products';

export const fetchAllProducts = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export const fetchProductsByCategory = async (category) => {
    try {
        const response = category === "" ?
            await axios.get(API_URL) :
            await axios.get(`${API_URL}/category/${category}`);
        return response.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}