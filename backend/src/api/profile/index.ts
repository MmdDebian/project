import { Router } from 'express';
import { index } from './controller';
const router = Router();

router.post('/' , index);


export default router ; 