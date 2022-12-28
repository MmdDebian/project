import { Router } from 'express';
import { read } from './controller';
const router = Router();

router.get('/' , read);

export default router ; 