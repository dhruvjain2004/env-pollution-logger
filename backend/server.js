import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import employeeRoutes from './routes/employees.js';
import leaveRoutes from './routes/leaves.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

app.use('/api/employees', employeeRoutes);
app.use('/api/leaves', leaveRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
