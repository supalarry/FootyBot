import { NextFunction, Request, Response } from 'express';

import Logger from '../../services/logger';
import {getHeadsups} from "../../db/supabase";

const NAMESPACE = 'headsup list';

const headsupList = async (req: Request, res: Response, next: NextFunction) => {
    Logger.info(NAMESPACE, 'Invoked');

    const headsups = await getHeadsups();
    return res.status(200).json(headsups);
};

export default { headsupList };
