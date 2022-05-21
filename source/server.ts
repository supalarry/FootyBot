import express, { Request, Response } from 'express';
import Logger from './services/logger';
import server from './config/server';

const NAMESPACE = 'Server';

const router = express();

// API health check
router.get('/ping', (req: Request, res: Response) => {
    return res.status(200).json({
        message: 'pong'
    });
});

router.listen(server.port, () => {
    Logger.info(NAMESPACE, `[${server.environment}] Server is running ${server.hostname}:${server.port}`);
});
