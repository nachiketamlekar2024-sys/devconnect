import express from 'express';
const router = express.Router();
router.get('/api/homepage', (req, res) => {
  res.json({ message: 'Homepage data' });
});