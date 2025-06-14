import React from 'react';
import TaskCard from './taskcard';

const TaskList = ({ tasks, onToggle }) => {
  if (tasks.length === 0) {
    return <p className="text-gray-500 text-center mt-4">No tasks for this day</p>;
  }

  return (
    <div className="space-y-2">
      {tasks.map(task => (
        <TaskCard key={task._id} task={task} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default TaskList;
