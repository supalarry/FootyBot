import express from 'express';
import controller from '../../controllers/headsup/add';

const router = express.Router();

router.post('/headsup', controller.headsupAdd);

export = router;
