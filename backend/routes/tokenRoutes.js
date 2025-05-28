import { Router } from 'express';
import { getAllTokens, getTokenById, searchTokens } from '../controllers/tokenController.js';

const router = Router();

// Route to get all tokens
router.get('/all', getAllTokens);

// Route to get a token by ID
router.get('/:id', getTokenById);

// Route to search tokens by query
router.get('/search/:query', searchTokens);

export default router;
