import { getTimeStamp } from '../helpers/time';
import util from 'util';

export default class Logger {
    static info(namespace: string, message: string, object?: any) {
        if (object) {
            console.info(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`, object);
        } else {
            console.info(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`);
        }
    }

    static warn(namespace: string, message: string, object?: any) {
        if (object) {
            console.warn(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`, object);
        } else {
            console.warn(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`);
        }
    }

    static error(namespace: string, message: string, object?: any) {
        if (object) {
            console.error(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`, object);
        } else {
            console.error(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`);
        }
    }

    static debug(namespace: string, message: string, object?: any) {
        if (object) {
            console.debug(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`, object);
        } else {
            console.debug(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`);
        }
    }

    static debugNestedObject<T>(namespace: string, message: string, object: T): void {
        console.debug(`[${getTimeStamp()}] [DEEPLOG] [${namespace}] ${message} ${util.inspect(object, { showHidden: false, depth: null })}`);
    }
}
