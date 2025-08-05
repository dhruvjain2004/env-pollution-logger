#!/bin/bash

echo "🚀 Setting up Leave Application Portal..."

# Install backend dependencies
echo "📦 Installing backend dependencies..."
cd backend
npm install
cd ..

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
cd frontend
npm install
cd ..

echo "✅ Installation complete!"
echo ""
echo "📋 Next steps:"
echo "1. Start MongoDB on your local machine"
echo "2. Update backend/config.env with your MongoDB connection string"
echo "3. Run 'cd backend && npm run dev' to start the backend server"
echo "4. Run 'cd frontend && npm run dev' to start the frontend server"
echo ""
echo "🌐 The application will be available at http://localhost:5173" 