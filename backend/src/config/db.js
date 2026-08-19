
const mongoose = require('mongoose');

require('dotenv').config();


const connectDB = async () => {
  try{

    const connector = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connecting with DB @ ${connector.connection.host}`)
  }
  catch(error){
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;