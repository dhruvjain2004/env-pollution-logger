import express from 'express';
import Employee from '../models/Employee.js';
const router = express.Router();

router.post('/', async (req, res) => {
  const employee = new Employee(req.body);
  await employee.save();
  res.status(201).json(employee);
});

router.get('/', async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});

export default router;