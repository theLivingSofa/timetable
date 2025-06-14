import React from 'react';

// const TaskCard = ({ task, onToggle }) => {
//   return (
//     <div className="flex items-center justify-between bg-gray-800 p-3 rounded-lg shadow text-white">
//       <div className="flex items-center gap-3 w-full">
//         <input
//           type="checkbox"
//           checked={task.done}
//           onChange={() => onToggle(task._id)}
//           className="h-5 w-5 accent-blue-600 cursor-pointer"
//         />
//         <p className={`text-lg w-full ${task.done ? "line-through opacity-60" : ""}`}>
//           {task.task}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default TaskCard;
// import React from 'react';
// import dayjs from 'dayjs';

// const TaskCard = ({ task, onToggle }) => {
//   const isDone = task.done;

//   // Parse time (e.g., "09:30") into a full datetime
//   const taskTime = dayjs(`${dayjs().format("YYYY-MM-DD")}T${task.time}`);
//   const now = dayjs();

//   // Determine card color based on status and time
//   let bgColor = "bg-gray-800";
//   if (isDone) {
//     bgColor = "bg-green-700";
//   } else if (taskTime.isBefore(now)) {
//     bgColor = "bg-red-700";
//   }

//   return (
//     <div
//       onClick={() => {
//         console.log("Clicked task:", task._id);
//         onToggle(task._id);
//     }}

//       className={`flex justify-between items-center p-4 rounded-lg shadow-md cursor-pointer transition-all text-white ${bgColor}`}
//     >
//       <div className="flex flex-col">
//         <span className={`text-lg font-medium ${isDone ? "line-through opacity-60" : ""}`}>
//           {task.task}
//         </span>
//         <span className="text-sm text-gray-300">⏰ {task.time}</span>
//       </div>
//       <div className="text-xl">
//         {isDone ? "✅" : taskTime.isBefore(now) ? "⏱️" : "⬜"}
//       </div>
//     </div>
//   );
// };

// export default TaskCard;
const TaskCard = ({ task, onToggle }) => {
  const now = new Date();
  const taskTime = new Date(`${task.date}T${task.time}`);
  const isOverdue = !task.done && now > taskTime;

  let bgColor = "bg-white";
  if (task.done) bgColor = "bg-green-600 text-white";
  else if (isOverdue) bgColor = "bg-red-600 text-white";

  return (
    <div
      onClick={() => onToggle(task._id)}
      className={`cursor-pointer ${bgColor} p-3 rounded-lg shadow`}
    >
      <p className="text-lg font-semibold">{task.task}</p>
      <p className="text-sm opacity-80">{task.time}</p>
    </div>
  );
};

export default TaskCard;