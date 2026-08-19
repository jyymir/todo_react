// 1. Setup & Environment
require('dotenv').config(); 
const express = require('express'); // Move this to the top
const cors = require('cors'); 
const connectDB = require('./config/db.js'); 

// 2. Requirements
const todo = require('./models/Todo.js'); 
const todoRoutes = require('./routes/todoRoutes.js'); 

// 3. App Initialization
const app = express(); // FIX: Initialize cleanly here instead of requiring './app'

// 4. Global Middleware (Must be defined BEFORE routes)
app.use(cors()); 
app.use(express.json()); 

// 5. Use Routes
app.use('/api', todoRoutes); 

// 6. DB Connection & Start Server
const PORT = process.env.PORT || 5001; 
connectDB().then(() => { 
  app.listen(PORT, () => { 
    console.log(`Server running on port ${PORT}`); 
  }); 
}).catch((err) => { 
  console.error("Failed to start server due to DB connection error:", err); 
});
