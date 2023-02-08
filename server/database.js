const mongoose = require('mongoose');

const URI = "mongodb+srv://kelvin:WlteoDPe5B6Z1bqh@cluster0.tjpcdqu.mongodb.net/allFind_db?retryWrites=true&w=majority";

try {
    // Connect to the MongoDB cluster
     mongoose.connect(
      URI,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(" MongoDB atlas is connected")
    );

  } catch (e) {
    console.log("could not connect");
  }

module.exports = mongoose;