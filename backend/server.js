const express = require('express');
const app = express();
const pool = require('./db');

// Middleware
app.use(express.json()); // Body parser middleware

// Routes
app.use('/api/example', require('./routes/Routes'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
