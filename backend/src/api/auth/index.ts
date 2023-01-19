import { Router } from 'express';
import { phoneNumberLogin } from './controller';
const router = Router();

router.post(
    '/phoneNumberLogin' , 
    phoneNumberLogin
);

export default router ; 