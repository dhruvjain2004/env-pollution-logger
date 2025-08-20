// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

// Log the API base URL in development
if (import.meta.env.DEV) {
  console.log('API Base URL:', API_BASE_URL);
}

export const config = {
  apiBaseUrl: API_BASE_URL,
  endpoints: {
    employees: `${API_BASE_URL}/api/employees`,
    leaves: `${API_BASE_URL}/api/leaves`,
    health: `${API_BASE_URL}/health`,
  }
};
