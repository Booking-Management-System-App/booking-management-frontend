import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_AZURE_FUNCTIONS_API_URL,  // Using Vite's env variable feature
  headers: {
    'Content-Type': 'application/json',
    // Include other headers as needed
  },
  timeout: 10000, // Specifies a timeout (in milliseconds) before the request is aborted
});

export default api;
