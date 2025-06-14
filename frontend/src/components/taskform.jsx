import React, { useState } from 'react';
import { createTask } from '../api/tasks';

const TaskForm = ({ userId, onTaskCreated }) => {
  const [task, setTask] = useState('');
  const [time, setTime] = useState('');
  const [startDate, setStartDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [repeatDaily, setRepeatDaily] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!task || !time || !userId) return alert("All fields required");

    await createTask({
      userId,
      task,
      time,
      repeatDaily,
      startDate
    });

    setTask('');
    setTime('');
    setRepeatDaily(false);
    onTaskCreated(); // refresh tasks
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg p-4 shadow mb-4">
      <div className="flex flex-col md:flex-row gap-2 mb-2">
        <input
          className="border p-2 rounded w-full"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Task Description"
        />
        <input
          className="border p-2 rounded w-full"
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-2 items-center">
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border p-2 rounded w-full md:w-auto"
        />
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={repeatDaily}
            onChange={(e) => setRepeatDaily(e.target.checked)}
          />
          Repeat daily for 1 year
        </label>
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
