const PRODUCTION = 'production';
const DEVELOPMENT = 'development';
const environment = isProduction() ? PRODUCTION : DEVELOPMENT;

function isProduction() {
    const env = process.env.NODE_ENV;
    return env === 'production';
}

const hostname = environment === PRODUCTION ? process.env.RENDER_EXTERNAL_URL : 'localhost';
const port = environment === PRODUCTION ? 3001 : 3000;

const server = {
    environment,
    hostname,
    port
};

export default server;
