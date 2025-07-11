import axios from 'axios';

// Try multiple possible server URLs
const API_URLS = [
  'https://sports-scholarship.onrender.com/api/auth',
  'http://localhost:7777/api/auth'
];

// Function to test which server is responding
async function findWorkingServer() {
  for (const url of API_URLS) {
    try {
      console.log(`Testing connection to: ${url}`);
      // Use a simple GET request with CORS mode set explicitly
      const response = await fetch(url.replace('/api/auth', '/health'), { 
        mode: 'cors',
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        },
        timeout: 5000 
      });
      
      if (response.ok) {
        console.log(`Server at ${url} is responding!`);
        // Save the working URL to localStorage for other services to use
        localStorage.setItem('api_base_url', url);
        return url;
      } else {
        console.log(`Server at ${url} responded with status: ${response.status}`);
      }
    } catch (error) {
      console.log(`Server at ${url} is not responding: ${error.message}`);
    }
  }
  // Default to the production URL if none are working
  console.log('No servers responding, using production URL');
  localStorage.setItem('api_base_url', API_URLS[0]);
  return API_URLS[0];
}

// Initial API instance
const api = axios.create({
  baseURL: API_URLS[0], // Default to production URL first
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  timeout: 10000, // 10 second timeout
  withCredentials: false // Needed for cross-origin requests
});

// Check server connection on module load
(async () => {
  try {
    const workingUrl = await findWorkingServer();
    console.log(`Using API URL: ${workingUrl}`);
    api.defaults.baseURL = workingUrl;
  } catch (err) {
    console.error('Failed to find working server:', err);
  }
})();

// Add token to request if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log(`Making ${config.method?.toUpperCase()} request to: ${config.baseURL}${config.url}`);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor for debugging
api.interceptors.response.use(
  (response) => {
    console.log(`Response from ${response.config.url}:`, response.status);
    return response;
  },
  (error) => {
    if (error.response) {
      console.error(`Error response from ${error.config.url}:`, error.response.status, error.response.data);
    } else if (error.request) {
      console.error(`No response received from ${error.config.url}`);
      // Check if there might be a CORS error
      if (error.message && error.message.includes('NetworkError')) {
        console.error('Possible CORS issue detected');
      }
    } else {
      console.error(`Error setting up request to ${error.config?.url}:`, error.message);
    }
    return Promise.reject(error);
  }
);

// Register user
const register = async (userData) => {
  console.log('Registering user with data:', userData);
  
  try {
    console.log('Sending registration request');
    const response = await api.post('/register', userData);
    console.log('Registration response:', response.data);
    
    if (response.data.token) {
      localStorage.setItem('auth_token', response.data.token);
      localStorage.setItem('auth_user', JSON.stringify(response.data.user));
      console.log('User data saved to localStorage');
    }

    return {
      ...response.data,
      success: response.data.success || true
    };
  } catch (error) {
    console.error("Registration error details:", error);
    
    // Check for CORS errors
    if (error.message && (error.message.includes('NetworkError') || error.message.includes('Network Error'))) {
      return {
        success: false,
        error: 'CORS error: The server is not configured to accept requests from this origin. Please check server CORS settings.'
      };
    }
    
    if (error.response) {
      console.error("Server response:", error.response.data);
      console.error("Status code:", error.response.status);
      
      return {
        success: false,
        error: error.response?.data?.message || 'Registration failed. Please try again.'
      };
    } else if (error.request) {
      console.error("No response received:", error.request);
      return {
        success: false,
        error: 'No response from server. Please try again later or check if the server is running.'
      };
    }
    
    return {
      success: false,
      error: `Connection error: ${error.message}. Please check your network connection and server status.`
    };
  }
};

// Function to ensure admin role is correctly set for known admin emails
function ensureAdminRole() {
  try {
    const storedUser = localStorage.getItem('auth_user');
    if (!storedUser) return;
    
    const user = JSON.parse(storedUser);
    // Check if this user should be an admin
    const adminEmails = [
      'admin@example.com',
      'shreyans.jaiswal704@gmail.com',
      'admin@eil.com'
    ];
    
    const shouldBeAdmin = adminEmails.includes(user.email) || user.email?.toLowerCase().includes('admin');
    
    if (shouldBeAdmin && user.role !== 'admin') {
      console.log(`Setting admin role for ${user.email}`);
      user.role = 'admin';
      localStorage.setItem('auth_user', JSON.stringify(user));
      console.log('User role updated to admin');
    }
  } catch (error) {
    console.error('Error in ensureAdminRole:', error);
  }
}

// Login user
const login = async (email, password) => {
  console.log('Attempting login for:', email);
  
  try {
    const response = await api.post('/login', { email, password });
    console.log('Login response:', response.data);
    
    if (response.data.token) {
      // Check if user object has role property
      if (response.data.user) {
        console.log('User role from API:', response.data.user.role);
        
        // Make sure user has a role, default to 'user' if not present
        if (!response.data.user.role) {
          console.warn('User has no role, defaulting to "user"');
          response.data.user.role = 'user';
        }
        
        // For demo/debug purposes - If the email includes "admin", set role to admin
        // This is just for testing - remove in production
        if (email.toLowerCase().includes('admin') || email === 'shreyans.jaiswal704@gmail.com') {
          console.log('Setting admin role based on email pattern');
          response.data.user.role = 'admin';
        }
        
        localStorage.setItem('auth_token', response.data.token);
        localStorage.setItem('auth_user', JSON.stringify(response.data.user));
        console.log('User logged in successfully');
        console.log('Stored user data:', JSON.stringify(response.data.user));
        
        // Run the admin role check immediately after login
        ensureAdminRole();
      } else {
        console.error('Login response contained token but no user data');
      }
    } else {
      console.warn('Login response did not contain a token');
    }

    return {
      ...response.data,
      success: response.data.success || true
    };
  } catch (error) {
    console.error("Login error details:", error);
    
    // Check for CORS errors
    if (error.message && (error.message.includes('NetworkError') || error.message.includes('Network Error'))) {
      return {
        success: false,
        error: 'CORS error: The server is not configured to accept requests from this origin. Please check server CORS settings.'
      };
    }
    
    if (error.response) {
      console.error("Server response:", error.response.data);
      console.error("Status code:", error.response.status);
      
      return {
        success: false,
        error: error.response?.data?.message || 'Invalid credentials. Please try again.'
      };
    } else if (error.request) {
      console.error("No response received");
      return {
        success: false,
        error: 'No response from server. Please check if the server is running at http://localhost:7777.'
      };
    }
    
    return {
      success: false,
      error: `Connection error: ${error.message}. Please check your network connection and server status.`
    };
  }
};

// Add additional admin role check on auth service init (runs when page loads)
(() => {
  console.log('Checking admin role on page load');
  ensureAdminRole();
})();

// Logout user
const logout = () => {
  console.log('Logging out user');
  localStorage.removeItem('auth_token');
  localStorage.removeItem('auth_user');
};

// Get current user
const getCurrentUser = async () => {
  console.log('Fetching current user data');
  
  try {
    const response = await api.get('/me');
    console.log('Current user data:', response.data);
    return {
      ...response.data,
      success: response.data.success || true
    };
  } catch (error) {
    console.error("Get current user error details:", error);
    
    // Check for CORS errors
    if (error.message && (error.message.includes('NetworkError') || error.message.includes('Network Error'))) {
      return {
        success: false,
        error: 'CORS error: The server is not configured to accept requests from this origin. Please check server CORS settings.'
      };
    }
    
    if (error.response) {
      console.error("Server response:", error.response.data);
      console.error("Status code:", error.response.status);
      
      return {
        success: false,
        error: error.response?.data?.message || 'Failed to fetch user data'
      };
    } else if (error.request) {
      console.error("No response received");
      return {
        success: false,
        error: 'No response from server. Please try again later or check if the server is running.'
      };
    }
    
    return {
      success: false,
      error: `Connection error: ${error.message}. Please check your network connection and server status.`
    };
  }
};

const authService = {
  register,
  login,
  logout,
  getCurrentUser
};

export default authService; 