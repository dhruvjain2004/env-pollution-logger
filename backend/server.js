import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import employeeRoutes from './routes/employees.js';
import leaveRoutes from './routes/leaves.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.join(__dirname, 'config.env'), override: true });

const app = express();

// CORS configuration for production
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://env-pollution-logger.vercel.app', 'https://*.vercel.app', 'https://env-pollution-logger-frontend.vercel.app'] // Allow Vercel domains
    : ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}));

app.use(express.json());

const PORT = process.env.PORT || 5000;

// Use environment variable for MongoDB URI
const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  console.error('MONGO_URI is not defined. Please set the MONGO_URI environment variable.');
  process.exit(1);
}

// Log the effective MongoDB URI in a masked form to verify which URI is used
try {
  const maskedUri = mongoUri.replace(/(mongodb(?:\+srv)?:\/\/)([^:]+):[^@]+@/i, '$1$2:***@');
  console.log('Using Mongo URI:', maskedUri);
} catch (e) {
  console.log('Using Mongo URI (unmasked):', mongoUri);
}

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// Optional detailed connection event logs
mongoose.connection.on('connected', () => {
  console.log('Mongoose connection open');
});
mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});
mongoose.connection.on('disconnected', () => {
  console.warn('Mongoose connection disconnected');
});

app.use('/api/employees', employeeRoutes);
app.use('/api/leaves', leaveRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  // 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
  res.json({ status: 'ok', dbState: mongoose.connection.readyState });
});

// DB ping endpoint to verify connectivity to Atlas
app.get('/dbping', async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ ok: 0, message: 'DB not connected', dbState: mongoose.connection.readyState });
    }
    const admin = mongoose.connection.db.admin();
    const result = await admin.ping();
    res.json({ ok: 1, result });
  } catch (error) {
    console.error('DB ping failed:', error);
    res.status(500).json({ ok: 0, error: error.message });
  }
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Leave Application Backend API', status: 'running' });
});

