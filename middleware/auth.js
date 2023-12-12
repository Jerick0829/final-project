// middleware/auth.js
const jwt = require('jsonwebtoken');
const config = require('../config'); // Adjust the path as needed

// Middleware function for authentication
function authenticate(req, res, next) {
  // Get the token from the request headers
  const token = req.header('x-auth-token');

  // Check if there's no token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, config.jwtSecret);

    // Add the user from the token payload to the request object
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
}

module.exports = authenticate;
