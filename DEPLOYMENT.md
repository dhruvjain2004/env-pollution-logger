# Deployment Guide

## Backend Deployment (Render)

### 1. Prepare Backend
- Ensure `backend/package.json` has correct scripts
- Make sure `backend/.gitignore` excludes `config.env`
- Backend is ready for deployment

### 2. Deploy to Render

1. **Create Render Account**
   - Go to [render.com](https://render.com)
   - Sign up with GitHub

2. **Create New Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select the repository

3. **Configure Service**
   - **Name**: `leave-app-backend` (or your preferred name)
   - **Root Directory**: `backend`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free (or paid if needed)

4. **Environment Variables**
   Add these environment variables in Render dashboard:
   ```
   MONGO_URI=mongodb+srv://dhruvjain527:MliK6tReI1soIZpe@cluster0.mhvg6hg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   NODE_ENV=production
   PORT=10000
   ```

5. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment to complete
   - Note the URL (e.g., `https://your-app.onrender.com`)

## Frontend Deployment (Vercel)

### 1. Prepare Frontend
- Frontend is already configured for Vercel
- `package.json` has correct build script
- Environment variables will be set in Vercel

### 2. Deploy to Vercel

1. **Create Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub

2. **Import Project**
   - Click "New Project"
   - Import your GitHub repository
   - Select the repository

3. **Configure Project**
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Environment Variables**
   Add this environment variable in Vercel dashboard:
   ```
   VITE_API_BASE_URL=https://your-backend-url.onrender.com
   ```
   Replace `your-backend-url.onrender.com` with your actual Render backend URL.

5. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete
   - Note the URL (e.g., `https://your-app.vercel.app`)

## Post-Deployment

### 1. Update Backend CORS
After getting your Vercel frontend URL, update the CORS configuration in `backend/server.js`:

```javascript
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://your-actual-frontend-url.vercel.app'] // Replace with your actual Vercel URL
    : ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}));
```

### 2. Test the Application
1. Visit your Vercel frontend URL
2. Test adding employees and leave requests
3. Verify data is being saved to MongoDB Atlas

### 3. Monitor Logs
- **Render**: Check logs in the Render dashboard
- **Vercel**: Check deployment logs in Vercel dashboard

## Troubleshooting

### Common Issues

1. **CORS Errors**
   - Ensure backend CORS includes your Vercel domain
   - Check that `NODE_ENV=production` is set

2. **MongoDB Connection Issues**
   - Verify `MONGO_URI` is correct in Render environment variables
   - Check MongoDB Atlas Network Access allows all IPs (0.0.0.0/0)

3. **Build Failures**
   - Check package.json scripts are correct
   - Verify all dependencies are in package.json

4. **Environment Variables**
   - Ensure all environment variables are set in both Render and Vercel
   - Check variable names match exactly (case-sensitive)

### Health Check Endpoints
- Backend Health: `https://your-backend.onrender.com/health`
- Backend DB Ping: `https://your-backend.onrender.com/dbping`

## Security Notes

1. **Environment Variables**: Never commit sensitive data like MongoDB URIs
2. **CORS**: Only allow necessary domains in production
3. **MongoDB Atlas**: Use IP whitelist in production instead of 0.0.0.0/0
4. **HTTPS**: Both Render and Vercel provide HTTPS by default
