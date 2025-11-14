import { Router } from 'express';
import { getAllTokens, getTokenById, searchTokens } from '../controllers/tokenController.js';

const router = Router();

// Route to get all tokens
router.get('/all', getAllTokens);

// Route to search tokens by query (place before '/:id' to avoid conflicts)
router.get('/search/:query', searchTokens);

// Route to get a token by ID
router.get('/:id', getTokenById);

export default router;
