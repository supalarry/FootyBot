import express from 'express';
import controller from '../../controllers/db/version';

const router = express.Router();

router.get('/db/version', controller.dbVersion);

export = router;
