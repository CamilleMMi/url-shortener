import { config } from 'dotenv';

// File is useless as of today, i hardcoded the api URL inside the URLService

config({ path: './src/env/.env' });

export default {
    api_url: process.env.API_URL,
    front_url: process.env.FRONT_URL
};