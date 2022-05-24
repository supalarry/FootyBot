import { getEnvironment } from '../helpers/environment';

const port = 3001;
const environment = getEnvironment();

const config = {
    environment,
    port
};

export { config };
