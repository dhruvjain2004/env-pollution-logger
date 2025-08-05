import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import employeeRoutes from './routes/employees.js';
import leaveRoutes from './routes/leaves.js';

dotenv.config({ path: './config.env' });
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use('/api/employees', employeeRoutes);
app.use('/api/leaves', leaveRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
