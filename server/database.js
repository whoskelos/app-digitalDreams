const mongoose = require('mongoose');
require('dotenv').config();

try {
    // Connect to the MongoDB cluster
     mongoose.connect(
      process.env.MONGODB_URI,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(" Connected to MongoDB Atlas")
    );

  } catch (e) {
    console.log("could not connect");
  }

module.exports = mongoose;