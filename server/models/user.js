const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
      type: String, 
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      trim: true
    },
    admin: Boolean,
    favoritos: {
        type: [String]
      }
},{
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);