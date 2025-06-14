const mongoose = require('mongoose');

const TaskStatusSchema = new mongoose.Schema({
  userId: String,
  taskId: String,
  date: String, // YYYY-MM-DD
  done: { type: Boolean, default: false },
});

module.exports = mongoose.model('TaskStatus', TaskStatusSchema);
