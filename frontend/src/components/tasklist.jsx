// import React from 'react';
// import TaskCard from './taskcard';

// const TaskList = ({ tasks, onToggle }) => {
//   if (tasks.length === 0) {
//     return <p className="text-gray-500 text-center mt-4">No tasks for this day</p>;
//   }

//   return (
//     <div className="space-y-2">
//       {tasks.map(task => (
//         <TaskCard key={task._id} task={task} onToggle={onToggle} />
//       ))}
//     </div>
//   );
// };

// export default TaskList;

// import React from 'react';
// import TaskCard from './taskcard';
// import dayjs from 'dayjs';

// const TaskList = ({ tasks, onToggle }) => {
//   if (tasks.length === 0) {
//     return <p className="text-gray-500 text-center mt-4">No tasks for this day</p>;
//   }

//   // Sort tasks chronologically by time
//   const sortedTasks = tasks.slice().sort((a, b) => {
//     const timeA = dayjs(`${a.date}T${a.time}`);
//     const timeB = dayjs(`${b.date}T${b.time}`);
//     return timeA - timeB;
//   });

//   return (
//     <div className="space-y-2">
//       {sortedTasks.map(task => (
//         <TaskCard key={task._id} task={task} onToggle={onToggle} />
//       ))}
//     </div>
//   );
// };

// export default TaskList;
import React from 'react';
import TaskCard from './taskcard';
import dayjs from 'dayjs';

const TaskList = ({ tasks, onToggle, selectedDate }) => {
  if (tasks.length === 0) {
    return <p className="text-gray-500 text-center mt-4">No tasks for this day</p>;
  }

  // Sort tasks chronologically by time
  const sortedTasks = tasks.slice().sort((a, b) => {
    const timeA = dayjs(`${a.date}T${a.time}`);
    const timeB = dayjs(`${b.date}T${b.time}`);
    return timeA - timeB;
  });

  return (
    <div className="space-y-2">
      {sortedTasks.map(task => (
        <TaskCard
          key={task._id}
          task={task}
          onToggle={onToggle}
          selectedDate={selectedDate} // ✅ Pass selected date
        />
      ))}
    </div>
  );
};

export default TaskList;
