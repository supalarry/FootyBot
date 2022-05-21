import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// SERVER_HOSTNAME, SERVER_PORT is available when app is hosted
const PRODUCTION = 'production';
const DEVELOPMENT = 'development';
const env = isProduction() ? PRODUCTION : DEVELOPMENT;

const SERVER_HOSTNAME = env === PRODUCTION ? process.env.RENDER_EXTERNAL_URL : 'localhost';
const SERVER_PORT = 3001;

function isProduction() {
    const env = process.env.NODE_ENV;
    return env === 'production';
}

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};

const config = {
    server: SERVER
};

export default config;
