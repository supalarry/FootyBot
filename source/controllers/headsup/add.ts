import { NextFunction, Request, Response } from 'express';

import Logger from '../../services/logger';
import { addHeadsup } from '../../db/supabase';

const NAMESPACE = 'headsup add';

const headsupAdd = async (req: Request, res: Response, next: NextFunction) => {
    Logger.info(NAMESPACE, 'Invoked');

    const headsup = await addHeadsup(req.body.type, req.body.text);
    return res.status(201).json(...headsup!);
};

export default { headsupAdd };
