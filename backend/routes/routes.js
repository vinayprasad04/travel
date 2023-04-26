import {Router} from 'express';
import { getEvent } from '../controllers/controller.js';


const router=Router();

router.get('/events',getEvent);

export default router;