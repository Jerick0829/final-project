// routes/userRoutes.js
const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const authenticate = require('../middleware/auth'); // Import the authentication middleware

const router = new express.Router();

// POST /users/register - Register a new user
router.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    const token = jwt.sign({ _id: user._id.toString() }, 'your_secret_key_here'); // Replace with your JWT secret key
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});

// POST /users/login - Log in a user
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user || !(await user.comparePassword(req.body.password))) {
      return res.status(401).send({ error: 'Login failed!' });
    }
    const token = jwt.sign({ _id: user._id.toString() }, 'your_secret_key_here'); // Replace with your JWT secret key
    res.send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});

// GET /users/profile - Retrieve user profile (protected route)
router.get('/profile', authenticate, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    if (!user) return res.status(404).send('User not found');
    res.json(user);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

// Add more user routes here as needed

module.exports = router;
