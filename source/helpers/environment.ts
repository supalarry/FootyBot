import { ENVIRONMENTS } from '../shared/constants';

export function isProduction() {
    return process.env.ENVIRONMENT === ENVIRONMENTS.PRODUCTION;
}

export function isDevelopment() {
    return process.env.ENVIRONMENT === ENVIRONMENTS.DEVELOPMENT;
}
