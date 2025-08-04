import express from 'express';
import Leave from '../models/Leave.js';
const router = express.Router();

router.post('/', async (req, res) => {
  const leave = new Leave(req.body);
  await leave.save();
  res.status(201).json(leave);
});

router.get('/', async (req, res) => {
  const leaves = await Leave.find().populate('employeeId');
  res.json(leaves);
});

router.patch('/:id/status', async (req, res) => {
  const { status } = req.body;
  const updatedLeave = await Leave.findByIdAndUpdate(req.params.id, { status }, { new: true });
  res.json(updatedLeave);
});

export default router;
