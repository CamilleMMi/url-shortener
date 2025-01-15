const dotenv = require('dotenv');

dotenv.config({ path: './src/env/.env' });

const { NODE_ENV, MONGODB_URL, PORT, DOMAIN_NAME } = process.env

module.exports = {
    env: NODE_ENV,
    mongodb_url: MONGODB_URL,
    port: PORT,
    domain_name: DOMAIN_NAME
};