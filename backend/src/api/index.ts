import { Request , Response , NextFunction , Router } from 'express';
import user from './user';
import auth from './auth';

const router = Router();

router.use('/user' , user);
router.use('/auth' , auth);

export default router ; 