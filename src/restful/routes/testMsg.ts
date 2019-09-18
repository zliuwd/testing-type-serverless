import { Router } from 'express';
import { TypeMap } from '../../typeMap';

const router = Router();
router.get('/', (req: TypeMap['Request'], res: TypeMap['Response']) => res.send('this is the restful api return msg'));
export default router;
