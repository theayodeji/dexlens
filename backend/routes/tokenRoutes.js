import { Router } from 'express';
import { getAllTokens, getTokenById } from '../controllers/tokenController.js';

const router = Router();

// Route to get all tokens
router.get('/all', getAllTokens);

// Route to get a token by ID
router.get('/:id', getTokenById);

export default router;
