
require('dotenv').config();

const connectDB = require('./config/db.js');

const todo = require('.models/Todo.js');


const app = require('./app');

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
