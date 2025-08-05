import express from 'express';
import Employee from '../models/Employee.js';
const router = express.Router();

// Add new employee
router.post('/', async (req, res) => {
  try {
    const { name, email, department } = req.body;
    
    // Basic validation
    if (!name || !email || !department) {
      return res.status(400).json({ error: 'Name, email, and department are required' });
    }
    
    const employee = new Employee({ name, email, department });
    await employee.save();
    res.status(201).json(employee);
  } catch (error) {
    console.error('Error creating employee:', error);
    res.status(500).json({ error: 'Failed to create employee' });
  }
});

// Get all employees
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    console.error('Error fetching employees:', error);
    res.status(500).json({ error: 'Failed to fetch employees' });
  }
});

export default router;