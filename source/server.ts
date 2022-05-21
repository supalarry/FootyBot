import express from 'express';
import Logger from './services/logger';
import config from './config/server';

const NAMESPACE = 'Server';

const router = express();

router.listen(config.server.port, () => Logger.info(NAMESPACE, `Server is running ${config.server.hostname}:${config.server.port}`));
