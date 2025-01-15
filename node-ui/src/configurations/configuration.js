import { config } from 'dotenv';

config({ path: './src/env/.env' });

export default {
    api_url: process.env.API_URL
};