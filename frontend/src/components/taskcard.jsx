// // import React from 'react';

// // const TaskCard = ({ task, onToggle }) => {
// //   return (
// //     <div className="flex items-center justify-between bg-gray-800 p-3 rounded-lg shadow text-white">
// //       <div className="flex items-center gap-3 w-full">
// //         <input
// //           type="checkbox"
// //           checked={task.done}
// //           onChange={() => onToggle(task._id)}
// //           className="h-5 w-5 accent-blue-600 cursor-pointer"
// //         />
// //         <p className={`text-lg w-full ${task.done ? "line-through opacity-60" : ""}`}>
// //           {task.task}
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default TaskCard;
// // import React from 'react';
// // import dayjs from 'dayjs';

// // const TaskCard = ({ task, onToggle }) => {
// //   const isDone = task.done;

// //   // Parse time (e.g., "09:30") into a full datetime
// //   const taskTime = dayjs(`${dayjs().format("YYYY-MM-DD")}T${task.time}`);
// //   const now = dayjs();

// //   // Determine card color based on status and time
// //   let bgColor = "bg-gray-800";
// //   if (isDone) {
// //     bgColor = "bg-green-700";
// //   } else if (taskTime.isBefore(now)) {
// //     bgColor = "bg-red-700";
// //   }

// //   return (
// //     <div
// //       onClick={() => {
// //         console.log("Clicked task:", task._id);
// //         onToggle(task._id);
// //     }}

// //       className={`flex justify-between items-center p-4 rounded-lg shadow-md cursor-pointer transition-all text-white ${bgColor}`}
// //     >
// //       <div className="flex flex-col">
// //         <span className={`text-lg font-medium ${isDone ? "line-through opacity-60" : ""}`}>
// //           {task.task}
// //         </span>
// //         <span className="text-sm text-gray-300">⏰ {task.time}</span>
// //       </div>
// //       <div className="text-xl">
// //         {isDone ? "✅" : taskTime.isBefore(now) ? "⏱️" : "⬜"}
// //       </div>
// //     </div>
// //   );
// // };

// // export default TaskCard;
// import React from 'react';
// import dayjs from 'dayjs';

// const TaskCard = ({ task, onToggle }) => {
//   const now = dayjs();
//   const taskTime = dayjs(`${task.date}T${task.time}`);
//   const isOverdue = !task.done && taskTime.isBefore(now);

//   let bgColor = "bg-gray-800"; // Default dark
//   if (task.done) bgColor = "bg-green-600";
//   else if (isOverdue) bgColor = "bg-red-600";

//   return (
//     <div
//       onClick={() => onToggle(task._id)}
//       className={`cursor-pointer ${bgColor} text-white p-4 rounded-lg shadow transition duration-200 hover:scale-[1.01]`}
//     >
//       <div className="flex justify-between items-center">
//         <p className="text-lg font-semibold">{task.task}</p>
//         <span className="text-sm font-mono opacity-75">{task.time}</span>
//       </div>
//     </div>
//   );
// };

// export default TaskCard;

// import React from 'react';
// import dayjs from 'dayjs';

// const TaskCard = ({ task, onToggle }) => {
//   const now = dayjs();
//   const taskTime = dayjs(`${task.date}T${task.time}`);
//   const isOverdue = !task.done && taskTime.isBefore(now);

//   // Background color logic
//   let bgColor = "bg-gray-800"; // default dark
//   if (task.done) bgColor = "bg-green-600";
//   else if (isOverdue) bgColor = "bg-red-600";

//   return (
//     <div
//       onClick={() => onToggle(task._id)}
//       className={`cursor-pointer ${bgColor} text-white p-4 rounded-lg shadow transition duration-200 hover:scale-[1.01]`}
//     >
//       <div className="flex justify-between items-center">
//         <div>
//           <p className={`text-lg font-semibold ${task.done ? "line-through opacity-60" : ""}`}>
//             {task.task}
//           </p>
//           <p className="text-sm text-gray-300 mt-1 font-mono">⏰ {task.time}</p>
//         </div>
//         <div className="text-xl">
//           {task.done ? "✅" : isOverdue ? "⏱️" : "⬜"}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TaskCard;

// import React from 'react';
// import dayjs from 'dayjs';

// const TaskCard = ({ task, onToggle }) => {
//   const now = dayjs();
//   console.log({
//   task: task.task,
//   taskDate: task.date,
//   currentDate: dayjs().format('YYYY-MM-DD'),
//   isToday: task.date === dayjs().format('YYYY-MM-DD'),
// });

//   const taskTime = dayjs(`${task.date}T${task.time}`);
//   const isToday = task.date === now.format('YYYY-MM-DD');
//   const isOverdue = !task.done && isToday && taskTime.isBefore(now);

//   // Background color logic
//   let bgColor = "bg-gray-800"; // default dark
//   if (task.done) bgColor = "bg-green-600";
//   else if (isOverdue) bgColor = "bg-red-600";

//   return (
//     <div
//       onClick={() => onToggle(task._id)}
//       className={`cursor-pointer ${bgColor} text-white p-4 rounded-lg shadow transition duration-200 hover:scale-[1.01]`}
//     >
//       <div className="flex justify-between items-center">
//         <div>
//           <p className={`text-lg font-semibold ${task.done ? "line-through opacity-60" : ""}`}>
//             {task.task}
//           </p>
//           <p className="text-sm text-gray-300 mt-1 font-mono">⏰ {task.time}</p>
//         </div>
//         <div className="text-xl">
//           {task.done ? "✅" : isOverdue ? "⏱️" : "⬜"}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TaskCard;
// import React from 'react';
// import dayjs from 'dayjs';

// const TaskCard = ({ task, onToggle, selectedDate }) => {
//   const now = dayjs();
//   const isToday = task.date === selectedDate;

//   const taskTime = dayjs(`${task.date}T${task.time}`);
//   const isOverdue = !task.done && isToday && taskTime.isBefore(now);

//   // Optional debug
//   console.log({
//     task: task.task,
//     taskDate: task.date,
//     selectedDate,
//     isToday,
//     now: now.format(),
//     taskTime: taskTime.format()
//   });

//   // Background color logic
//   let bgColor = "bg-gray-800";
//   if (task.done) bgColor = "bg-green-600";
//   else if (isOverdue) bgColor = "bg-red-600";

//   return (
//     <div
//       onClick={() => onToggle(task._id)}
//       className={`cursor-pointer ${bgColor} text-white p-4 rounded-lg shadow transition duration-200 hover:scale-[1.01]`}
//     >
//       <div className="flex justify-between items-center">
//         <div>
//           <p className={`text-lg font-semibold ${task.done ? "line-through opacity-60" : ""}`}>
//             {task.task}
//           </p>
//           <p className="text-sm text-gray-300 mt-1 font-mono">⏰ {task.time}</p>
//         </div>
//         <div className="text-xl">
//           {task.done ? "✅" : isOverdue ? "⏱️" : "⬜"}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TaskCard;
import React from 'react';
import dayjs from 'dayjs';

const TaskCard = ({ task, onToggle, selectedDate }) => {
  const now = dayjs();
  const selected = dayjs(selectedDate);
  const taskDateTime = dayjs(`${selectedDate}T${task.time}`);

  const isPastDay = selected.isBefore(now, 'day');
  const isToday = selected.isSame(now, 'day');
  const isPastTimeToday = isToday && taskDateTime.isBefore(now);

  const isOverdue = !task.done && (isPastTimeToday || isPastDay);

  // Optional debug log
  console.log({
    task: task.task,
    repeatDaily: task.repeatDaily,
    taskTime: task.time,
    selectedDate,
    now: now.format(),
    isPastDay,
    isPastTimeToday,
    done: task.done,
    isOverdue
  });

  // Background color logic
  let bgColor = "bg-gray-800";
  if (task.done) bgColor = "bg-green-600";
  else if (isOverdue) bgColor = "bg-red-600";

  return (
    <div
      onClick={() => onToggle(task._id)}
      className={`cursor-pointer ${bgColor} text-white p-4 rounded-lg shadow transition duration-200 hover:scale-[1.01]`}
    >
      <div className="flex justify-between items-center">
        <div>
          <p className={`text-lg font-semibold ${task.done ? "line-through opacity-60" : ""}`}>
            {task.task}
          </p>
          <p className="text-sm text-gray-300 mt-1 font-mono">⏰ {task.time}</p>
        </div>
        <div className="text-xl">
          {task.done ? "✅" : isOverdue ? "⏱️" : "⬜"}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
