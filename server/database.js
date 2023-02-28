const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery', false);
try {
    // Connect to the MongoDB cluster
     mongoose.connect(
      process.env.MONGODB_URI,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(" Connectado a MongoDB Atlas")
    );

  } catch (e) {
    console.log("No se ha podido conectar");
  }

module.exports = mongoose;