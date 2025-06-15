// const mongoose = require('mongoose');

// const TaskSchema = new mongoose.Schema({
//   userId: String,
//   time: String,
//   task: String,
//   done: Boolean,
//   date: String, // "2025-06-14"
//   repeatDaily: Boolean, // optional
//   done: { type: Boolean, default: false },
// });


// module.exports = mongoose.model('Task', TaskSchema);
const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  task: { type: String, required: true },
  time: { type: String, required: true }, // Stored in "HH:mm" format
  date: { type: String, required: true }, // "YYYY-MM-DD", to allow per-day evaluation
  repeatDaily: { type: Boolean, default: false },
});

module.exports = mongoose.model('Task', TaskSchema);

