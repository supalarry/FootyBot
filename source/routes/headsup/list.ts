import express from 'express';
import controller from '../../controllers/headsup/list';

const router = express.Router();

router.get('/headsup', controller.headsupList);

export = router;
