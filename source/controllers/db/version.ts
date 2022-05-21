import { NextFunction, Request, Response } from 'express';

import Logger from '../../services/logger';

const NAMESPACE = 'db version controller';

const dbVersion = (req: Request, res: Response, next: NextFunction) => {
    Logger.info(NAMESPACE, 'Invoked');

    return res.status(200).json({
        version: 62,
        lastMigration: '20220411085539_add_fellow_to_company',
    });
};

export default { dbVersion };
