import axios from 'axios';
// import configuration from '../../configurations/configuration';

// const { api_url } = configuration;

export const shortenUrl = async(originalUrl) => {
    try {
        const response = await axios.post(`http://localhost:3002/`, { originalUrl });
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || "Une erreur est survenue";
    }
};
