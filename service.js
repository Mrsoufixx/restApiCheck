// Require necessary modules
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables from .env file
dotenv.config({
  path: path.join(__dirname, 'config', '.env')
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error(err));

// Create an instance of the express app
const app = express();

// Require the User model
const User = require('./models/User');

// Define routes
// GET all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new user
app.post('/users', async (req, res) => {
  const { name, email } = req.body;
  const user = new User({ name, email });
  try {
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT (update) a user by id
app.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    const user = await User.findByIdAndUpdate(id, { name, email }, { new: true });
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE a user by id
app.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on http://localhost:${port}`));
