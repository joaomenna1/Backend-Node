import {Router} from 'express';
import { SendMailController } from './controllers/sendMailController';

const router = Router();

const sendMailController = new SendMailController();

router.post('/sendMail', sendMailController.execute);

export {router}

