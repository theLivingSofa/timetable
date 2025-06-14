import React from 'react';

const TaskCard = ({ task, onToggle }) => {
  return (
    <div className="flex items-center justify-between bg-gray-800 p-3 rounded-lg shadow text-white">
      <div className="flex items-center gap-3 w-full">
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => onToggle(task._id)}
          className="h-5 w-5 accent-blue-600 cursor-pointer"
        />
        <p className={`text-lg w-full ${task.done ? "line-through opacity-60" : ""}`}>
          {task.task}
        </p>
      </div>
    </div>
  );
};

export default TaskCard;
