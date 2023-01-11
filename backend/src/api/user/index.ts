import { Router } from 'express';
import { read, update } from './controller';
const router = Router();

router.get('/' , read);
router.get('/:id' , update);

export default router ; 