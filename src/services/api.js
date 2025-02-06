const API_URL = 'https://fakestoreapi.com/products';
import axios from 'axios';

export const fetchAllProducts = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}