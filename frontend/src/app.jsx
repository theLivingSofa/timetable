// // // import React, { useEffect, useState } from "react";
// // // import TaskList from "./components/tasklist";
// // // import dayjs from "dayjs";

// // // const App = () => {
// // //   const [userId, setUserId] = useState("ayush123"); // TODO: replace with Firebase UID later
// // //   const [selectedDate, setSelectedDate] = useState(dayjs().format("YYYY-MM-DD"));
// // //   const [task, setTask] = useState("");
// // //   const [time, setTime] = useState("");
// // //   const [repeatYear, setRepeatYear] = useState(false);
// // //   const [tasks, setTasks] = useState([]);

// // //   const fetchTasks = async () => {
// // //     try {
// // //       const res = await fetch(`https://timetable-psie.onrender.com/api/tasks/${userId}?date=${selectedDate}`);
// // //       const data = await res.json();
// // //       setTasks(data);
// // //     } catch (err) {
// // //       console.error("Failed to fetch tasks:", err);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchTasks();
// // //   }, [selectedDate, userId]);

// // //   const handleAddTask = async () => {
// // //     if (!task || !time) return;

// // //     try {
// // //       const formattedDate = dayjs(selectedDate).format("YYYY-MM-DD");

// // //       await fetch("https://timetable-psie.onrender.com/api/tasks", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({
// // //           userId,
// // //           task,
// // //           time,
// // //           date: formattedDate,
// // //           repeatYear,
// // //         }),
// // //       });

// // //       setTask("");
// // //       setTime("");
// // //       setRepeatYear(false);
// // //       await fetchTasks();
// // //     } catch (err) {
// // //       console.error("Failed to add task:", err);
// // //     }
// // //   };

// // //  const handleToggleDone = async (id) => {
// // //   // Optimistically update the UI
// // //   setTasks(prev =>
// // //     prev.map(t => (t._id === id ? { ...t, done: !t.done } : t))
// // //   );

// // //   // Send toggle request (no wait)
// // //   fetch(`https://timetable-psie.onrender.com/api/tasks/${id}/toggle`, {
// // //     method: "PATCH",
// // //   });
// // // };



// // //   return (
// // //     <div className="min-h-screen bg-black text-white p-4 font-sans">
// // //       <h1 className="text-4xl font-bold text-center mb-6 flex items-center justify-center gap-2">
// // //         <img src="/calendar-icon.png" className="w-8 h-8" alt="icon" />
// // //         Timetable
// // //       </h1>

// // //       <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
// // //         <input
// // //           value={userId}
// // //           onChange={(e) => setUserId(e.target.value)}
// // //           placeholder="User ID"
// // //           className="p-2 rounded bg-gray-800 text-white border border-gray-600 w-full max-w-xs"
// // //         />
// // //         <input
// // //           type="date"
// // //           value={selectedDate}
// // //           onChange={(e) => setSelectedDate(e.target.value)}
// // //           className="p-2 rounded bg-gray-800 text-white border border-gray-600 w-full max-w-xs"
// // //         />
// // //       </div>

// // //       <div className="bg-gray-900 p-4 rounded-lg shadow-lg max-w-xl mx-auto space-y-4">
// // //         <div className="flex gap-2">
// // //           <input
// // //             value={task}
// // //             onChange={(e) => setTask(e.target.value)}
// // //             placeholder="Task Description"
// // //             className="flex-1 p-2 rounded bg-gray-800 text-white border border-gray-600"
// // //           />
// // //           <input
// // //             type="time"
// // //             value={time}
// // //             onChange={(e) => setTime(e.target.value)}
// // //             className="p-2 rounded bg-gray-800 text-white border border-gray-600"
// // //           />
// // //         </div>

// // //         <div className="flex justify-between items-center">
// // //           <input
// // //             type="date"
// // //             value={selectedDate}
// // //             onChange={(e) => setSelectedDate(e.target.value)}
// // //             className="p-2 rounded bg-gray-800 text-white border border-gray-600"
// // //           />

// // //           <label className="flex items-center gap-2">
// // //             <input
// // //               type="checkbox"
// // //               checked={repeatYear}
// // //               onChange={() => setRepeatYear(!repeatYear)}
// // //             />
// // //             Repeat daily for 1 year
// // //           </label>

// // //           <button
// // //             onClick={handleAddTask}
// // //             className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
// // //           >
// // //             Add Task
// // //           </button>
// // //         </div>
// // //       </div>

// // //       <div className="mt-8 max-w-xl mx-auto">
// // //         <TaskList tasks={tasks} onToggle={handleToggleDone} />
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default App;
// // // import React, { useEffect, useState } from "react";
// // // import TaskList from "./components/tasklist";
// // // import dayjs from "dayjs";

// // // const App = () => {
// // //   const [userId, setUserId] = useState("ayush123");
// // //   const [selectedDate, setSelectedDate] = useState(dayjs().format("YYYY-MM-DD"));
// // //   const [task, setTask] = useState("");
// // //   const [time, setTime] = useState("");
// // //   const [repeatYear, setRepeatYear] = useState(false);
// // //   const [tasks, setTasks] = useState([]);

// // //   const fetchTasks = async () => {
// // //     try {
// // //       const res = await fetch(
// // //         `https://timetable-psie.onrender.com/api/tasks/${userId}?date=${selectedDate}`
// // //       );
// // //       const data = await res.json();
// // //       setTasks(data);
// // //     } catch (err) {
// // //       console.error("Failed to fetch tasks:", err);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchTasks();
// // //   }, [selectedDate, userId]);

// // //   const handleAddTask = async () => {
// // //     if (!task || !time) return;

// // //     try {
// // //       await fetch("https://timetable-psie.onrender.com/api/tasks", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({
// // //           userId,
// // //           task,
// // //           time,
// // //           date: selectedDate,
// // //           repeatYear,
// // //         }),
// // //       });

// // //       setTask("");
// // //       setTime("");
// // //       setRepeatYear(false);
// // //       fetchTasks();
// // //     } catch (err) {
// // //       console.error("Failed to add task:", err);
// // //     }
// // //   };

// // //   const handleToggleDone = async (id) => {
// // //     setTasks((prev) =>
// // //       prev.map((t) => (t._id === id ? { ...t, done: !t.done } : t))
// // //     );

// // //     fetch(`https://timetable-psie.onrender.com/api/tasks/${id}/toggle`, {
// // //       method: "PATCH",
// // //     });
// // //   };

// // // const handleAddTask = async () => {
// // //   if (!task || !time) return;

// // //   try {
// // //     const formattedDate = dayjs(selectedDate).format("YYYY-MM-DD");
// // //     const normalizedTime = dayjs(`${formattedDate}T${time}`).format("HH:mm");

// // //     await fetch("https://timetable-psie.onrender.com/api/tasks", {
// // //       method: "POST",
// // //       headers: { "Content-Type": "application/json" },
// // //       body: JSON.stringify({
// // //         userId,
// // //         task,
// // //         time: normalizedTime,
// // //         date: formattedDate,
// // //         repeatYear,
// // //       }),
// // //     });

// // //     setTask("");
// // //     setTime("");
// // //     setRepeatYear(false);
// // //     fetchTasks();
// // //   } catch (err) {
// // //     console.error("Failed to add task:", err);
// // //   }
// // // };


// // // const handleToggleDone = async (taskId) => {
// // //   setTasks((prev) =>
// // //     prev.map((t) => (t._id === taskId ? { ...t, done: !t.done } : t))
// // //   );

// // //   await fetch(`https://timetable-psie.onrender.com/api/status/${taskId}`, {
// // //     method: "PATCH",
// // //     headers: { "Content-Type": "application/json" },
// // //     body: JSON.stringify({ userId, date: selectedDate }),
// // //   });
// // // };


// // //   const isToday = selectedDate === dayjs().format("YYYY-MM-DD");

// // //   return (
// // //     <div className="min-h-screen bg-black text-white p-4 font-sans">
// // //       <h1 className="text-4xl font-bold text-center mb-6 flex items-center justify-center gap-2">
// // //         <img src="/calendar-icon.png" className="w-8 h-8" alt="icon" />
// // //         Timetable
// // //       </h1>

// // //       {/* Top Controls */}
// // //       <div className="flex flex-col items-center justify-center gap-4 mb-6">
// // //         <input
// // //           value={userId}
// // //           onChange={(e) => setUserId(e.target.value)}
// // //           placeholder="User ID"
// // //           className="p-2 rounded bg-gray-800 text-white border border-gray-600 w-full max-w-xs"
// // //         />

// // //         <div className="flex items-center gap-4">
// // //           <button
// // //             onClick={() =>
// // //               setSelectedDate(dayjs(selectedDate).subtract(1, "day").format("YYYY-MM-DD"))
// // //             }
// // //             className="text-xl bg-gray-800 px-3 py-1 rounded hover:bg-gray-700"
// // //           >
// // //             ←
// // //           </button>

// // //           <input
// // //             type="date"
// // //             value={selectedDate}
// // //             onChange={(e) => setSelectedDate(e.target.value)}
// // //             className={`p-2 rounded border w-[150px] text-center transition-all duration-150 ${
// // //               isToday
// // //                 ? "bg-green-800 border-green-500 text-white"
// // //                 : "bg-gray-800 border-gray-600 text-white"
// // //             }`}
// // //           />

// // //           <button
// // //             onClick={() =>
// // //               setSelectedDate(dayjs(selectedDate).add(1, "day").format("YYYY-MM-DD"))
// // //             }
// // //             className="text-xl bg-gray-800 px-3 py-1 rounded hover:bg-gray-700"
// // //           >
// // //             →
// // //           </button>
// // //         </div>

// // //         {!isToday && (
// // //           <button
// // //             onClick={() => setSelectedDate(dayjs().format("YYYY-MM-DD"))}
// // //             className="mt-2 text-sm underline text-blue-400 hover:text-blue-300"
// // //           >
// // //             Jump to Today
// // //           </button>
// // //         )}
// // //       </div>

// // //       {/* Task Creation */}
// // //       <div className="bg-gray-900 p-4 rounded-lg shadow-lg max-w-xl mx-auto space-y-4">
// // //         <div className="flex gap-2">
// // //           <input
// // //             value={task}
// // //             onChange={(e) => setTask(e.target.value)}
// // //             placeholder="Task Description"
// // //             className="flex-1 p-2 rounded bg-gray-800 text-white border border-gray-600"
// // //           />
// // //           <input
// // //             type="time"
// // //             value={time}
// // //             onChange={(e) => setTime(e.target.value)}
// // //             className="p-2 rounded bg-gray-800 text-white border border-gray-600"
// // //           />
// // //         </div>

// // //         <div className="flex justify-between items-center">
// // //           <label className="flex items-center gap-2 text-sm">
// // //             <input
// // //               type="checkbox"
// // //               checked={repeatYear}
// // //               onChange={() => setRepeatYear(!repeatYear)}
// // //             />
// // //             Repeat daily for 1 year
// // //           </label>

// // //           <button
// // //             onClick={handleAddTask}
// // //             className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
// // //           >
// // //             Add Task
// // //           </button>
// // //         </div>
// // //       </div>

// // //       {/* Task List */}
// // //       <div className="mt-8 max-w-xl mx-auto">
// // //         <TaskList tasks={tasks} onToggle={handleToggleDone} />
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default App;

// // // import React, { useEffect, useState } from "react";
// // // import TaskList from "./components/tasklist";
// // // import PomodoroModal from "./components/PomodoroModal";
// // // import dayjs from "dayjs";

// // // const App = () => {
// // //   const [userId, setUserId] = useState("ayush123");
// // //   const [selectedDate, setSelectedDate] = useState(dayjs().format("YYYY-MM-DD"));
// // //   const [task, setTask] = useState("");
// // //   const [time, setTime] = useState("");
// // //   const [repeatYear, setRepeatYear] = useState(false);
// // //   const [tasks, setTasks] = useState([]);
// // //   const [showPomodoro, setShowPomodoro] = useState(false); // new

// // //   const fetchTasks = async () => {
// // //     try {
// // //       const res = await fetch(
// // //         `https://timetable-psie.onrender.com/api/tasks/${userId}?date=${selectedDate}`
// // //       );
// // //       const data = await res.json();
// // //       setTasks(data);
// // //     } catch (err) {
// // //       console.error("Failed to fetch tasks:", err);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchTasks();
// // //   }, [selectedDate, userId]);

// // //   const handleAddTask = async () => {
// // //     if (!task || !time) return;

// // //     try {
// // //       const formattedDate = dayjs(selectedDate).format("YYYY-MM-DD");
// // //       const normalizedTime = dayjs(`${formattedDate}T${time}`).format("HH:mm");

// // //       await fetch("https://timetable-psie.onrender.com/api/tasks", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({
// // //           userId,
// // //           task,
// // //           time: normalizedTime,
// // //           date: formattedDate,
// // //           repeatYear,
// // //         }),
// // //       });

// // //       setTask("");
// // //       setTime("");
// // //       setRepeatYear(false);
// // //       fetchTasks();
// // //     } catch (err) {
// // //       console.error("Failed to add task:", err);
// // //     }
// // //   };

// // //   const handleToggleDone = async (taskId) => {
// // //     setTasks((prev) =>
// // //       prev.map((t) => (t._id === taskId ? { ...t, done: !t.done } : t))
// // //     );

// // //     await fetch(`https://timetable-psie.onrender.com/api/status/${taskId}`, {
// // //       method: "PATCH",
// // //       headers: { "Content-Type": "application/json" },
// // //       body: JSON.stringify({ userId, date: selectedDate }),
// // //     });
// // //   };

// // //   const isToday = selectedDate === dayjs().format("YYYY-MM-DD");

// // //   return (
// // //     <div className="min-h-screen bg-black text-white p-4 font-sans relative">
// // //       <h1 className="text-4xl font-bold text-center mb-6 flex items-center justify-center gap-2">
// // //         <img src="/calendar-icon.png" className="w-8 h-8" alt="icon" />
// // //         Timetable
// // //       </h1>

// // //       {/* Top Controls */}
// // //       <div className="flex flex-col items-center justify-center gap-4 mb-6">
// // //         <input
// // //           value={userId}
// // //           onChange={(e) => setUserId(e.target.value)}
// // //           placeholder="User ID"
// // //           className="p-2 rounded bg-gray-800 text-white border border-gray-600 w-full max-w-xs"
// // //         />

// // //         <div className="flex items-center gap-4">
// // //           <button
// // //             onClick={() =>
// // //               setSelectedDate(dayjs(selectedDate).subtract(1, "day").format("YYYY-MM-DD"))
// // //             }
// // //             className="text-xl bg-gray-800 px-3 py-1 rounded hover:bg-gray-700"
// // //           >
// // //             ←
// // //           </button>

// // //           <input
// // //             type="date"
// // //             value={selectedDate}
// // //             onChange={(e) => setSelectedDate(e.target.value)}
// // //             className={`p-2 rounded border w-[150px] text-center transition-all duration-150 ${
// // //               isToday
// // //                 ? "bg-green-800 border-green-500 text-white"
// // //                 : "bg-gray-800 border-gray-600 text-white"
// // //             }`}
// // //           />

// // //           <button
// // //             onClick={() =>
// // //               setSelectedDate(dayjs(selectedDate).add(1, "day").format("YYYY-MM-DD"))
// // //             }
// // //             className="text-xl bg-gray-800 px-3 py-1 rounded hover:bg-gray-700"
// // //           >
// // //             →
// // //           </button>
// // //         </div>

// // //         {!isToday && (
// // //           <button
// // //             onClick={() => setSelectedDate(dayjs().format("YYYY-MM-DD"))}
// // //             className="mt-2 text-sm underline text-blue-400 hover:text-blue-300"
// // //           >
// // //             Jump to Today
// // //           </button>
// // //         )}
// // //       </div>

// // //       {/* Task Creation */}
// // //       <div className="bg-gray-900 p-4 rounded-lg shadow-lg max-w-xl mx-auto space-y-4">
// // //         <div className="flex gap-2">
// // //           <input
// // //             value={task}
// // //             onChange={(e) => setTask(e.target.value)}
// // //             placeholder="Task Description"
// // //             className="flex-1 p-2 rounded bg-gray-800 text-white border border-gray-600"
// // //           />
// // //           <input
// // //             type="time"
// // //             value={time}
// // //             onChange={(e) => setTime(e.target.value)}
// // //             className="p-2 rounded bg-gray-800 text-white border border-gray-600"
// // //           />
// // //         </div>

// // //         <div className="flex justify-between items-center">
// // //           <label className="flex items-center gap-2 text-sm">
// // //             <input
// // //               type="checkbox"
// // //               checked={repeatYear}
// // //               onChange={() => setRepeatYear(!repeatYear)}
// // //             />
// // //             Repeat daily for 1 year
// // //           </label>

// // //           <button
// // //             onClick={handleAddTask}
// // //             className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
// // //           >
// // //             Add Task
// // //           </button>
// // //         </div>
// // //       </div>

// // //       {/* Task List */}
// // //       <div className="mt-8 max-w-xl mx-auto">
// // //         <TaskList tasks={tasks} onToggle={handleToggleDone} />
// // //       </div>

// // //       {/* 🍅 Pomodoro Button */}
// // //       <button
// // //   onClick={() => setShowPomodoro(true)}
// // //   className="fixed bottom-6 right-6 bg-gray-800 hover:bg-gray-700 text-white px-5 py-4 rounded-full text-xl shadow-xl border border-gray-600 z-50"
// // // >
// // //   🍅
// // // </button>


// // //       {/* Pomodoro Modal */}
// // //       {showPomodoro && (
// // //         <PomodoroModal
// // //           taskName="Focus Session"
// // //           onClose={() => setShowPomodoro(false)}
// // //         />
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default App;

// // import React, { useEffect, useState } from "react";
// // import TaskList from "./components/tasklist";
// // import PomodoroModal from "./components/PomodoroModal";
// // import AuthForm from "./components/AuthForm";
// // import { auth } from "./firebase";
// // import { onAuthStateChanged, signOut } from "firebase/auth";
// // import dayjs from "dayjs";

// // const App = () => {
// //   const [user, setUser] = useState(null);
// //   const [userId, setUserId] = useState("");
// //   const [selectedDate, setSelectedDate] = useState(dayjs().format("YYYY-MM-DD"));
// //   const [task, setTask] = useState("");
// //   const [time, setTime] = useState("");
// //   const [repeatYear, setRepeatYear] = useState(false);
// //   const [tasks, setTasks] = useState([]);
// //   const [showPomodoro, setShowPomodoro] = useState(false);

// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, (u) => {
// //       if (u) {
// //         setUser(u);
// //         setUserId(u.uid);
// //       } else {
// //         setUser(null);
// //         setUserId("");
// //       }
// //     });
// //     return () => unsubscribe();
// //   }, []);
// // //   console.log("Local time:", dayjs().format());


// //   const fetchTasks = async () => {
// //     if (!userId) return;
// //     try {
// //       const res = await fetch(
// //         `https://timetable-psie.onrender.com/api/tasks/${userId}?date=${selectedDate}`
// //       );
// //       const data = await res.json();
// //       setTasks(data);
// //     } catch (err) {
// //       console.error("Failed to fetch tasks:", err);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchTasks();
// //   }, [selectedDate, userId]);

// //   const handleAddTask = async () => {
// //     if (!task || !time || !userId) return;

// //     try {
// //       const formattedDate = dayjs(selectedDate).format("YYYY-MM-DD");
// //       const normalizedTime = dayjs(`${formattedDate}T${time}`).format("HH:mm");

// //       await fetch("https://timetable-psie.onrender.com/api/tasks", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({
// //           userId,
// //           task,
// //           time: normalizedTime,
// //           date: formattedDate,
// //           repeatYear,
// //         }),
// //       });

// //       setTask("");
// //       setTime("");
// //       setRepeatYear(false);
// //       fetchTasks();
// //     } catch (err) {
// //       console.error("Failed to add task:", err);
// //     }
// //   };

// //   const handleToggleDone = async (taskId) => {
// //     setTasks((prev) =>
// //       prev.map((t) => (t._id === taskId ? { ...t, done: !t.done } : t))
// //     );

// //     await fetch(`https://timetable-psie.onrender.com/api/status/${taskId}`, {
// //       method: "PATCH",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({ userId, date: selectedDate }),
// //     });
// //   };

// //   const isToday = selectedDate === dayjs().format("YYYY-MM-DD");

// //   // 🔐 Require login
// //   if (!user) {
// //     return (
// //       <div className="min-h-screen bg-black text-white p-4 flex items-center justify-center">
// //         <AuthForm onLogin={setUser} />
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-black text-white p-4 font-sans relative">
// //       <div className="text-sm text-right mb-4">
// //         Logged in as {user.email}
// //         <button
// //           onClick={() => signOut(auth)}
// //           className="text-blue-400 underline ml-2"
// //         >
// //           Logout
// //         </button>
// //       </div>

// //       <h1 className="text-4xl font-bold text-center mb-6 flex items-center justify-center gap-2">
// //         <span className="text-2xl">📅</span>
// //         Timetable
// //       </h1>

// //       {/* Top Controls */}
// //       <div className="flex flex-col items-center justify-center gap-4 mb-6">
// //         <div className="flex items-center gap-4">
// //           <button
// //             onClick={() =>
// //               setSelectedDate(dayjs(selectedDate).subtract(1, "day").format("YYYY-MM-DD"))
// //             }
// //             className="text-xl bg-gray-800 px-3 py-1 rounded hover:bg-gray-700"
// //           >
// //             ←
// //           </button>

// //           <input
// //             type="date"
// //             value={selectedDate}
// //             onChange={(e) => setSelectedDate(e.target.value)}
// //             className={`p-2 rounded border w-[150px] text-center transition-all duration-150 ${
// //               isToday
// //                 ? "bg-green-800 border-green-500 text-white"
// //                 : "bg-gray-800 border-gray-600 text-white"
// //             }`}
// //           />

// //           <button
// //             onClick={() =>
// //               setSelectedDate(dayjs(selectedDate).add(1, "day").format("YYYY-MM-DD"))
// //             }
// //             className="text-xl bg-gray-800 px-3 py-1 rounded hover:bg-gray-700"
// //           >
// //             →
// //           </button>
// //         </div>

// //         {!isToday && (
// //           <button
// //             onClick={() => setSelectedDate(dayjs().format("YYYY-MM-DD"))}
// //             className="mt-2 text-sm underline text-blue-400 hover:text-blue-300"
// //           >
// //             Jump to Today
// //           </button>
// //         )}
// //       </div>

// //       {/* Task Creation */}
// //       <div className="bg-gray-900 p-4 rounded-lg shadow-lg max-w-xl mx-auto space-y-4">
// //         <div className="flex gap-2">
// //           <input
// //             value={task}
// //             onChange={(e) => setTask(e.target.value)}
// //             placeholder="Task Description"
// //             className="flex-1 p-2 rounded bg-gray-800 text-white border border-gray-600"
// //           />
// //           <input
// //             type="time"
// //             value={time}
// //             onChange={(e) => setTime(e.target.value)}
// //             className="p-2 rounded bg-gray-800 text-white border border-gray-600"
// //           />
// //         </div>

// //         <div className="flex justify-between items-center">
// //           <label className="flex items-center gap-2 text-sm">
// //             <input
// //               type="checkbox"
// //               checked={repeatYear}
// //               onChange={() => setRepeatYear(!repeatYear)}
// //             />
// //             Repeat daily for 1 year
// //           </label>

// //           <button
// //             onClick={handleAddTask}
// //             className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
// //           >
// //             Add Task
// //           </button>
// //         </div>
// //       </div>

// //       {/* Task List */}
// //       <div className="mt-8 max-w-xl mx-auto">
// //         <TaskList tasks={tasks} onToggle={handleToggleDone} />
// //       </div>

// //       {/* 🍅 Pomodoro Button */}
// //       <button
// //         onClick={() => setShowPomodoro(true)}
// //         className="fixed bottom-6 right-6 bg-gray-800 hover:bg-gray-700 text-white px-5 py-4 rounded-full text-xl shadow-xl border border-gray-600 z-50"
// //       >
// //         🍅
// //       </button>

// //       {/* Pomodoro Modal */}
// //       {showPomodoro && (
// //         <PomodoroModal
// //           taskName="Focus Session"
// //           onClose={() => setShowPomodoro(false)}
// //         />
// //       )}
// //     </div>
// //   );
// // };


// // export default App;
// import React, { useEffect, useState } from "react";
// import TaskList from "./components/tasklist";
// import PomodoroModal from "./components/PomodoroModal";
// import AuthForm from "./components/AuthForm";
// import { auth } from "./firebase";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import dayjs from "dayjs";

// const App = () => {
//   const [user, setUser] = useState(null);
//   const [userId, setUserId] = useState("");
//   const [selectedDate, setSelectedDate] = useState(dayjs().format("YYYY-MM-DD"));
//   const [task, setTask] = useState("");
//   const [time, setTime] = useState("");
//   const [repeatYear, setRepeatYear] = useState(false);
//   const [tasks, setTasks] = useState([]);
//   const [showPomodoro, setShowPomodoro] = useState(false);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (u) => {
//       if (u) {
//         setUser(u);
//         setUserId(u.uid);
//       } else {
//         setUser(null);
//         setUserId("");
//       }
//     });
//     return () => unsubscribe();
//   }, []);

//   const fetchTasks = async () => {
//     if (!userId) return;
//     try {
//       const res = await fetch(
//         `https://timetable-psie.onrender.com/api/tasks/${userId}?date=${selectedDate}`
//       );
//       const data = await res.json();
//       setTasks(data);
//     } catch (err) {
//       console.error("Failed to fetch tasks:", err);
//     }
//   };

//   useEffect(() => {
//     fetchTasks();
//   }, [selectedDate, userId]);

//   const handleAddTask = async () => {
//     if (!task || !time || !userId) return;

//     const formattedDate = dayjs(selectedDate).format("YYYY-MM-DD");
//     const normalizedTime = dayjs(`${formattedDate}T${time}`).format("HH:mm");

//     try {
//       await fetch("https://timetable-psie.onrender.com/api/tasks", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           userId,
//           task,
//           time: normalizedTime,
//           date: formattedDate,
//           repeatYear,
//         }),
//       });

//       setTask("");
//       setTime("");
//       setRepeatYear(false);
//       fetchTasks();
//     } catch (err) {
//       console.error("Failed to add task:", err);
//     }
//   };

//   const handleToggleDone = async (taskId) => {
//     if (!userId) return;

//     setTasks((prev) =>
//       prev.map((t) => (t._id === taskId ? { ...t, done: !t.done } : t))
//     );

//     await fetch(`https://timetable-psie.onrender.com/api/status/${taskId}`, {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ userId, date: selectedDate }),
//     });
//   };

//   const isToday = selectedDate === dayjs().format("YYYY-MM-DD");

//   if (!user) {
//     return (
//       <div className="min-h-screen bg-black text-white p-4 flex items-center justify-center">
//         <AuthForm onLogin={setUser} />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-black text-white p-4 font-sans relative">
//       <div className="text-sm text-right mb-4">
//         Logged in as {user.email}
//         <button
//           onClick={() => signOut(auth)}
//           className="text-blue-400 underline ml-2"
//         >
//           Logout
//         </button>
//       </div>

//       <h1 className="text-4xl font-bold text-center mb-6 flex items-center justify-center gap-2">
//         <span className="text-2xl">📅</span>
//         Timetable
//       </h1>

//       {/* Date Navigation */}
//       <div className="flex flex-col items-center justify-center gap-4 mb-6">
//         <div className="flex items-center gap-4">
//           <button
//             onClick={() =>
//               setSelectedDate(dayjs(selectedDate).subtract(1, "day").format("YYYY-MM-DD"))
//             }
//             className="text-xl bg-gray-800 px-3 py-1 rounded hover:bg-gray-700"
//           >
//             ←
//           </button>

//           <input
//             type="date"
//             value={selectedDate}
//             onChange={(e) => setSelectedDate(e.target.value)}
//             className={`p-2 rounded border w-[150px] text-center transition-all duration-150 ${
//               isToday
//                 ? "bg-green-800 border-green-500 text-white"
//                 : "bg-gray-800 border-gray-600 text-white"
//             }`}
//           />

//           <button
//             onClick={() =>
//               setSelectedDate(dayjs(selectedDate).add(1, "day").format("YYYY-MM-DD"))
//             }
//             className="text-xl bg-gray-800 px-3 py-1 rounded hover:bg-gray-700"
//           >
//             →
//           </button>
//         </div>

//         {!isToday && (
//           <button
//             onClick={() => setSelectedDate(dayjs().format("YYYY-MM-DD"))}
//             className="mt-2 text-sm underline text-blue-400 hover:text-blue-300"
//           >
//             Jump to Today
//           </button>
//         )}
//       </div>

//       {/* Task Input */}
//       <div className="bg-gray-900 p-4 rounded-lg shadow-lg max-w-xl mx-auto space-y-4">
//         <div className="flex gap-2">
//           <input
//             value={task}
//             onChange={(e) => setTask(e.target.value)}
//             placeholder="Task Description"
//             className="flex-1 p-2 rounded bg-gray-800 text-white border border-gray-600"
//           />
//           <input
//             type="time"
//             value={time}
//             onChange={(e) => setTime(e.target.value)}
//             className="p-2 rounded bg-gray-800 text-white border border-gray-600"
//           />
//         </div>

//         <div className="flex justify-between items-center">
//           <label className="flex items-center gap-2 text-sm">
//             <input
//               type="checkbox"
//               checked={repeatYear}
//               onChange={() => setRepeatYear(!repeatYear)}
//             />
//             Repeat daily for 1 year
//           </label>

//           <button
//             onClick={handleAddTask}
//             className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
//           >
//             Add Task
//           </button>
//         </div>
//       </div>

//       {/* Task List */}
//       <div className="mt-8 max-w-xl mx-auto">
//         <TaskList tasks={tasks} onToggle={handleToggleDone} selectedDate={selectedDate} />
//       </div>

//       {/* Pomodoro Button */}
//       <button
//         onClick={() => setShowPomodoro(true)}
//         className="fixed bottom-6 right-6 bg-gray-800 hover:bg-gray-700 text-white px-5 py-4 rounded-full text-xl shadow-xl border border-gray-600 z-50"
//       >
//         🍅
//       </button>

//       {/* Pomodoro Modal */}
//       {showPomodoro && (
//         <PomodoroModal taskName="Focus Session" onClose={() => setShowPomodoro(false)} />
//       )}
//     </div>
//   );
// };

// export default App;

import React, { useEffect, useState } from "react";
import TaskList from "./components/tasklist";
import PomodoroModal from "./components/PomodoroModal";
import AuthForm from "./components/AuthForm";
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import dayjs from "dayjs";
import { createEvents } from 'ics';

const App = () => {
  const [user, setUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [userId, setUserId] = useState("");
  const [selectedDate, setSelectedDate] = useState(dayjs().format("YYYY-MM-DD"));
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");
  const [repeatYear, setRepeatYear] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [showPomodoro, setShowPomodoro] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setUserId(u?.uid || "");
      setTimeout(() => setAuthChecked(true), 2000); // ensure 2s loading
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [selectedDate, userId]);

  const fetchTasks = async () => {
    if (!userId) return;
    try {
      const res = await fetch(
        `https://timetable-psie.onrender.com/api/tasks/${userId}?date=${selectedDate}`
      );
      const data = await res.json();
      setTasks(data);
    } catch (err) {
      console.error("Failed to fetch tasks:", err);
    }
  };

  const handleAddTask = async () => {
    if (!task || !time || !userId) return;

    const formattedDate = dayjs(selectedDate).format("YYYY-MM-DD");
    const normalizedTime = dayjs(`${formattedDate}T${time}`).format("HH:mm");

    try {
      await fetch("https://timetable-psie.onrender.com/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          task,
          time: normalizedTime,
          date: formattedDate,
          repeatYear,
        }),
      });

      setTask("");
      setTime("");
      setRepeatYear(false);
      fetchTasks();
    } catch (err) {
      console.error("Failed to add task:", err);
    }
  };

  const handleExportICS = () => {
  if (!tasks.length) return alert("No tasks to export!");

  const events = tasks.map((task) => {
    const [hour, minute] = task.time.split(":").map(Number);
    const [year, month, day] = task.date.split("-").map(Number); // note: use task.date, not selectedDate

    const event = {
      start: [year, month, day, hour, minute],
      duration: { minutes: 30 },
      title: task.task,
      description: task.done ? "Completed" : "Pending",
    };

    // 🌀 Repeat daily for 1 year (if repeatDaily flag is true)
    if (task.repeatDaily || task.repeatYear) {
      event.recurrenceRule = `FREQ=DAILY;COUNT=365`;
    }

    return event;
  });

  createEvents(events, (error, value) => {
    if (error) {
      console.error("ICS generation failed:", error);
      return;
    }

    const blob = new Blob([value], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `Tasks-${selectedDate}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
};

  const handleToggleDone = async (taskId) => {
    if (!userId) return;

    setTasks((prev) =>
      prev.map((t) => (t._id === taskId ? { ...t, done: !t.done } : t))
    );

    await fetch(`https://timetable-psie.onrender.com/api/status/${taskId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, date: selectedDate }),
    });
  };

  const isToday = selectedDate === dayjs().format("YYYY-MM-DD");

  // ⏳ Auth loading screen
  if (!authChecked) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-400 mb-4" />
          <p className="text-lg font-semibold">Checking login...</p>
        </div>
      </div>
    );
  }

  // 🔐 Not logged in
  if (!user) {
    return (
      <div className="min-h-screen bg-black text-white p-4 flex items-center justify-center">
        <AuthForm onLogin={setUser} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-4 font-sans relative">
      <div className="text-sm text-right mb-4">
        Logged in as {user.email}
        <button
          onClick={() => signOut(auth)}
          className="text-blue-400 underline ml-2"
        >
          Logout
        </button>
      </div>

      <h1 className="text-4xl font-bold text-center mb-6 flex items-center justify-center gap-2">
        <span className="text-2xl">📅</span> Timetable
      </h1>

      {/* Top Controls */}
      <div className="flex flex-col items-center justify-center gap-4 mb-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() =>
              setSelectedDate(dayjs(selectedDate).subtract(1, "day").format("YYYY-MM-DD"))
            }
            className="text-xl bg-gray-800 px-3 py-1 rounded hover:bg-gray-700"
          >
            ←
          </button>

          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className={`p-2 rounded border w-[150px] text-center transition-all duration-150 ${
              isToday
                ? "bg-green-800 border-green-500 text-white"
                : "bg-gray-800 border-gray-600 text-white"
            }`}
          />

          <button
            onClick={() =>
              setSelectedDate(dayjs(selectedDate).add(1, "day").format("YYYY-MM-DD"))
            }
            className="text-xl bg-gray-800 px-3 py-1 rounded hover:bg-gray-700"
          >
            →
          </button>
        </div>

        {!isToday && (
          <button
            onClick={() => setSelectedDate(dayjs().format("YYYY-MM-DD"))}
            className="mt-2 text-sm underline text-blue-400 hover:text-blue-300"
          >
            Jump to Today
          </button>
        )}
      </div>

      {/* Task Creation */}
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

        {/* <div className="flex justify-between items-center">
          <label className="flex items-center gap-2 text-sm">
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

          <button
            onClick={handleExportICS}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded mt-4"
          >
            Export to Calendar (.ics)
          </button>

        </div> */}
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-4">
  <label className="flex items-center gap-2 text-sm">
    <input
      type="checkbox"
      checked={repeatYear}
      onChange={() => setRepeatYear(!repeatYear)}
    />
    Repeat daily for 1 year
  </label>

  <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
    <button
      onClick={handleAddTask}
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full md:w-auto"
    >
      Add Task
    </button>

    <button
      onClick={handleExportICS}
      className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded w-full md:w-auto"
    >
      Export to Calendar (.ics)
    </button>
  </div>
</div>

      </div>

      {/* Task List */}
      <div className="mt-8 max-w-xl mx-auto">
        <TaskList tasks={tasks} onToggle={handleToggleDone} selectedDate={selectedDate} />
      </div>

      {/* Pomodoro Button */}
      <button
        onClick={() => setShowPomodoro(true)}
        className="fixed bottom-6 right-6 bg-gray-800 hover:bg-gray-700 text-white px-5 py-4 rounded-full text-xl shadow-xl border border-gray-600 z-50"
      >
        🍅
      </button>

      {/* Pomodoro Modal */}
      {showPomodoro && (
        <PomodoroModal
          taskName="Focus Session"
          onClose={() => setShowPomodoro(false)}
        />
      )}
    </div>
  );
};

export default App;
