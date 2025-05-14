import axios from 'axios';

export const shortenUrl = async (originalUrl) => {
    try {
        const response = await axios.post(`http://localhost:3002/`, { originalUrl });
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || "Une erreur est survenue";
    }
};

export const getOriginalUrl = async (slug) => {
    try {
        const response = await axios.get(`http://localhost:3002/${slug}`);
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || "URL not found";
    }
};