const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes'); // Ensure this path is correct based on your project structure

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Database connection
mongoose.connect('mongodb://localhost:27017/tasksdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...', err));

// Use the taskRoutes for any calls to /tasks
app.use('/tasks', taskRoutes);

// Default route for the root of your server
app.get('/', (req, res) => {
  res.send('Welcome to the Task Manager API');
});

// 404 handler for any other routes not defined
app.use((req, res, next) => {
  res.status(404).send("Sorry, that route doesn't exist.");
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke on the server!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
