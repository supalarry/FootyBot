import express, { Request, Response } from 'express';
import Logger from './services/logger';
import server from './config/server';
import { startTelegramBot } from './telegram/bot';

const NAMESPACE = 'Server';

const router = express();

startTelegramBot();

// API health check
router.get('/ping', (req: Request, res: Response) => {
    Logger.info(NAMESPACE, 'API health check invoked');

    return res.status(200).json({
        message: 'pong'
    });
});

// router.listen(server.port, () => {
//     Logger.info(NAMESPACE, `[${server.environment}] Server is running ${server.hostname}:${server.port}`);
// });
