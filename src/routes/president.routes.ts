import { Router } from 'express'
const router = Router();

import {getPresidents, createPresident, getPresident, deletePost, updatePresident} from '../controllers/president.controller';

router.route('/')
    .get(getPresidents)
    .post(createPresident);

router.route('/:presidentId')
    .get(getPresident)
    .delete(deletePost)
    .put(updatePresident);

export default router;