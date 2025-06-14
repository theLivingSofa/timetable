import React, { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import dayjs from "dayjs";

const App = () => {
  const [userId, setUserId] = useState("ayush123"); // TODO: replace with Firebase UID later
  const [selectedDate, setSelectedDate] = useState(dayjs().format("YYYY-MM-DD"));
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");
  const [repeatYear, setRepeatYear] = useState(false);
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/tasks/${userId}?date=${selectedDate}`);
      const data = await res.json();
      setTasks(data);
    } catch (err) {
      console.error("Failed to fetch tasks:", err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [selectedDate, userId]);

  const handleAddTask = async () => {
    if (!task || !time) return;

    try {
      const formattedDate = dayjs(selectedDate).format("YYYY-MM-DD");

      await fetch("http://localhost:3000/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          task,
          time,
          date: formattedDate,
          repeatYear,
        }),
      });

      setTask("");
      setTime("");
      setRepeatYear(false);
      await fetchTasks();
    } catch (err) {
      console.error("Failed to add task:", err);
    }
  };

  const handleToggleDone = async (id) => {
  await fetch(`https://your-render-url.onrender.com/api/tasks/${id}/toggle`, {
    method: "PATCH",
  });
  fetchTasks(); // refresh task list
};


  return (
    <div className="min-h-screen bg-black text-white p-4 font-sans">
      <h1 className="text-4xl font-bold text-center mb-6 flex items-center justify-center gap-2">
        <img src="/calendar-icon.png" className="w-8 h-8" alt="icon" />
        Timetable
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
        <input
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="User ID"
          className="p-2 rounded bg-gray-800 text-white border border-gray-600 w-full max-w-xs"
        />
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="p-2 rounded bg-gray-800 text-white border border-gray-600 w-full max-w-xs"
        />
      </div>

      <div className="bg-gray-900 p-4 rounded-lg shadow-lg max-w-xl mx-auto space-y-4">
        <div className="flex gap-2">
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Task Description"
            className="flex-1 p-2 rounded bg-gray-800 text-white border border-gray-600"
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="p-2 rounded bg-gray-800 text-white border border-gray-600"
          />
        </div>

        <div className="flex justify-between items-center">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="p-2 rounded bg-gray-800 text-white border border-gray-600"
          />

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={repeatYear}
              onChange={() => setRepeatYear(!repeatYear)}
            />
            Repeat daily for 1 year
          </label>

          <button
            onClick={handleAddTask}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
            Add Task
          </button>
        </div>
      </div>

      <div className="mt-8 max-w-xl mx-auto">
        <TaskList tasks={tasks} onToggle={handleToggleDone} />
      </div>
    </div>
  );
};

export default App;
