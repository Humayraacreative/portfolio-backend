// index.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors()); // Allow requests from any origin (your frontend)
app.use(express.json()); // Parse JSON request bodies

// Simple GET endpoint to test the API
app.get('/api', (req, res) => {
  res.json({ message: 'Backend API is running successfully!' });
});

// POST endpoint to handle contact form submissions
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Received contact form submission:', { name, email, message });
  
  // In a real app, you would save this to a database or send an email here.
  // For this assignment, we'll just send a success response.
  res.json({ status: 'success', message: 'Message received!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});