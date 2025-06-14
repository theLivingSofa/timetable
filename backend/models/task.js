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
  userId: String,
  time: String,
  task: String,
  repeatDaily: Boolean, // true if meant to repeat
});

module.exports = mongoose.model('Task', TaskSchema);
