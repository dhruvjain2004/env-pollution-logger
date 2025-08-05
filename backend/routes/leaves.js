import express from 'express';
import Leave from '../models/Leave.js';
const router = express.Router();

// Submit leave request
router.post('/', async (req, res) => {
  try {
    const { employeeId, startDate, endDate, reason } = req.body;
    
    // Basic validation
    if (!employeeId || !startDate || !endDate || !reason) {
      return res.status(400).json({ error: 'Employee ID, start date, end date, and reason are required' });
    }
    
    // Validate dates
    const start = new Date(startDate);
    const end = new Date(endDate);
    if (start >= end) {
      return res.status(400).json({ error: 'End date must be after start date' });
    }
    
    const leave = new Leave({ employeeId, startDate: start, endDate: end, reason });
    await leave.save();
    res.status(201).json(leave);
  } catch (error) {
    console.error('Error creating leave request:', error);
    res.status(500).json({ error: 'Failed to create leave request' });
  }
});

// Get all leave requests
router.get('/', async (req, res) => {
  try {
    const leaves = await Leave.find().populate('employeeId');
    res.json(leaves);
  } catch (error) {
    console.error('Error fetching leave requests:', error);
    res.status(500).json({ error: 'Failed to fetch leave requests' });
  }
});

// Update leave status
router.patch('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    const { id } = req.params;
    
    // Validate status
    const validStatuses = ['Pending', 'Approved', 'Rejected'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ error: 'Invalid status. Must be Pending, Approved, or Rejected' });
    }
    
    const updatedLeave = await Leave.findByIdAndUpdate(id, { status }, { new: true }).populate('employeeId');
    if (!updatedLeave) {
      return res.status(404).json({ error: 'Leave request not found' });
    }
    res.json(updatedLeave);
  } catch (error) {
    console.error('Error updating leave status:', error);
    res.status(500).json({ error: 'Failed to update leave status' });
  }
});

export default router;
