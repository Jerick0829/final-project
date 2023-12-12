const express = require('express');
const router = express.Router();

// Mongoose Task model
const Task = require('../models/task');

// GET /tasks - List all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// POST /tasks - Create a new task
router.post('/', async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// GET /tasks/:id - Retrieve a single task by ID
router.get('/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).send('The task with the given ID was not found.');
    res.json(task);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// PUT /tasks/:id - Update a task
router.put('/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!task) return res.status(404).send('The task with the given ID was not found.');
    res.json(task);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// DELETE /tasks/:id - Delete a task
router.delete('/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndRemove(req.params.id);
    if (!task) return res.status(404).send('The task with the given ID was not found.');
    res.send(task);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
