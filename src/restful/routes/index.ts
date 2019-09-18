import { Router } from 'express';
import testRoute from './testMsg';

const router = Router();
router.use('/restful/test', testRoute);
export default router;
