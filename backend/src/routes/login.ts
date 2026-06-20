import { Router, Request, Response } from 'express';

const router = Router();

// Email/Password Login
router.post('/', async (req: Request, res: Response) => {
  try {
    // TODO: Implement Email/Password Login
    res.json({ message: 'Email/Password Login' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
