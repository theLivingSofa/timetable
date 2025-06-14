// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const Task = require('./models/task');

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch((err) => console.error('MongoDB connection error:', err));

// // Routes

// // Get all tasks for a user
// app.get('/api/tasks/:userId', async (req, res) => {
//   try {
//     const tasks = await Task.find({ userId: req.params.userId });
//     res.json(tasks);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Create a new task
// app.post('/api/tasks', async (req, res) => {
//   const { userId, time, task, done, repeatDaily, startDate } = req.body;

//   try {
//     if (repeatDaily) {
//       const tasks = [];
//       const start = new Date(startDate);
      
//       for (let i = 0; i < 365; i++) {
//         const date = new Date(start);
//         date.setDate(start.getDate() + i);

//         tasks.push(new Task({
//           userId,
//           time,
//           task,
//           done: false,
//           date: date.toISOString().split('T')[0] // "YYYY-MM-DD"
//         }));
//       }

//       await Task.insertMany(tasks);
//       res.status(201).json({ message: '365 tasks created' });
//     } else {
//       const newTask = new Task({
//         userId,
//         time,
//         task,
//         done: false,
//         date: startDate || new Date().toISOString().split('T')[0]
//       });

//       await newTask.save();
//       res.status(201).json(newTask);
//     }

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Failed to create task(s)' });
//   }
// });


// // Update a task (e.g., mark as done)
// app.patch('/api/tasks/:id', async (req, res) => {
//   try {
//     const updatedTask = await Task.findByIdAndUpdate(
//       req.params.id,
//       { $set: req.body },
//       { new: true }
//     );
//     if (!updatedTask) return res.status(404).json({ message: 'Task not found' });
//     res.json(updatedTask);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Root route
// app.get('/', (req, res) => {
//   res.send('Timetable API is running');
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// // Toggle done status of a task
// app.patch('/api/tasks/:id/toggle', async (req, res) => {
//   try {
//     const task = await Task.findById(req.params.id);
//     if (!task) return res.status(404).json({ message: 'Task not found' });

//     task.done = !task.done;
//     await task.save();

//     res.json(task);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Failed to toggle task status' });
//   }
// });

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const Task = require('./models/task');
// const dayjs = require('dayjs');

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch((err) => console.error('MongoDB connection error:', err));

// // Routes

// // Get tasks for a user (optionally filtered by date)
// app.get('/api/tasks/:userId', async (req, res) => {
//   try {
//     const query = { userId: req.params.userId };
//     if (req.query.date) {
//       query.date = req.query.date; // e.g., "2025-06-14"
//     }

//     const tasks = await Task.find(query);
//     res.json(tasks);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Create new task(s)
// app.post('/api/tasks', async (req, res) => {
//   const { userId, time, task, repeatDaily, startDate } = req.body;

//   try {
//     if (repeatDaily) {
//       const tasks = [];
//       const start = new Date(startDate);

//       for (let i = 0; i < 365; i++) {
//   const dateStr = dayjs(start).add(i, 'day').format('YYYY-MM-DD');

//   tasks.push(new Task({
//     userId,
//     time,
//     task,
//     done: false,
//     date: dateStr,
//   }));
// }

//       await Task.insertMany(tasks);
//       res.status(201).json({ message: '365 tasks created' });
//     } else {
//       const newTask = new Task({
//         userId,
//         time,
//         task,
//         done: false,
//         date: startDate || new Date().toISOString().split('T')[0],
//       });

//       await newTask.save();
//       res.status(201).json(newTask);
//     }

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Failed to create task(s)' });
//   }
// });

// // Update a task with patch
// app.patch('/api/tasks/:id', async (req, res) => {
//   try {
//     const updatedTask = await Task.findByIdAndUpdate(
//       req.params.id,
//       { $set: req.body },
//       { new: true }
//     );
//     if (!updatedTask) return res.status(404).json({ message: 'Task not found' });
//     res.json(updatedTask);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Toggle done status
// app.patch('/api/tasks/:id/toggle', async (req, res) => {
//   try {
//     const task = await Task.findById(req.params.id);
//     if (!task) return res.status(404).json({ message: 'Task not found' });

//     task.done = !task.done;
//     await task.save();

//     res.json(task);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Failed to toggle task status' });
//   }
// });

// // Health check route
// app.get('/', (req, res) => {
//   res.send('Timetable API is running');
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const dayjs = require('dayjs');

const Task = require('./models/task');
const TaskStatus = require('./models/taskStatus');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));

// 🧠 GET tasks for a user on a specific date
app.get('/api/tasks/:userId', async (req, res) => {
  const { userId } = req.params;
  const { date } = req.query;

  try {
    const tasks = await Task.find({ userId });
    const statuses = await TaskStatus.find({ userId, date });

    // Map status by taskId
    const statusMap = {};
    statuses.forEach((s) => {
      statusMap[s.taskId] = s.done;
    });

    // Merge into task list
    const merged = tasks.map((t) => ({
      ...t.toObject(),
      done: statusMap[t._id] || false,
    }));

    res.json(merged);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
});

// 🧠 POST create a new task (just one task stored)
app.post('/api/tasks', async (req, res) => {
  const { userId, time, task, repeatYear, date } = req.body;

  try {
    const newTask = new Task({
      userId,
      time,
      task,
      repeatDaily: repeatYear || false,
    });

    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create task' });
  }
});

// 🧠 PATCH toggle task status for a specific day
app.patch('/api/status/:taskId', async (req, res) => {
  const { taskId } = req.params;
  const { userId, date } = req.body;

  try {
    const existing = await TaskStatus.findOne({ userId, taskId, date });

    if (existing) {
      existing.done = !existing.done;
      await existing.save();
      return res.json(existing);
    }

    const newStatus = new TaskStatus({ userId, taskId, date, done: true });
    await newStatus.save();
    res.json(newStatus);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to toggle task status' });
  }
});

// ✅ Root
app.get('/', (req, res) => {
  res.send('Timetable API is running');
});

// Start
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
