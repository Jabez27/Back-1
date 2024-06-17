//models/User.js
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['student', 'teacher', 'admin'],
    default: 'student',
  },
  classValue: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  rollNumber: {
    type: Number,
    required: true,
  },
  fees: {
    type: Number,
    default: 0,
  },
}, { timestamps: true},
);

const User = mongoose.model('User', userSchema);

module.exports = User;
