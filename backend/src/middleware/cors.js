/**
 * Custom CORS middleware to ensure proper cross-origin resource sharing
 */
const corsMiddleware = (req, res, next) => {
  // Define allowed origins
  const allowedOrigins = [
    'https://sports-scholarship-6olq.vercel.app',
    'https://sports-scholarship.vercel.app', 
    'http://localhost:5173', 
    'http://127.0.0.1:5173', 
    'http://localhost:8081', 
    'http://localhost:8080',
    'http://127.0.0.1:8081'
  ];
  
  // Get the origin from the request
  const origin = req.headers.origin;
  
  // Check if the origin is allowed
  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  } else {
    // For development, allow all origins as fallback
    res.header('Access-Control-Allow-Origin', '*');
  }
  
  // Allow credentials
  res.header('Access-Control-Allow-Credentials', 'true');
  
  // Allow specific headers
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  
  // Allow specific methods
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS, PATCH'
  );
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  // Move to the next middleware
  next();
};

module.exports = corsMiddleware; 