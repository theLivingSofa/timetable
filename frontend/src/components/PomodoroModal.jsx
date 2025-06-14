import React, { useEffect, useState } from 'react';

const PomodoroModal = ({ taskName, onClose }) => {
  const [secondsLeft, setSecondsLeft] = useState(25 * 60); // 25 minutes
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let timer;
    if (isActive && secondsLeft > 0) {
      timer = setTimeout(() => setSecondsLeft(secondsLeft - 1), 1000);
    }
    if (secondsLeft === 0) {
      setIsActive(false);
    }
    return () => clearTimeout(timer);
  }, [isActive, secondsLeft]);

  const formatTime = () => {
    const m = String(Math.floor(secondsLeft / 60)).padStart(2, '0');
    const s = String(secondsLeft % 60).padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 text-white flex items-center justify-center z-50">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center space-y-4 w-72">
        <h2 className="text-xl font-bold">🍅 Pomodoro: {taskName}</h2>
        <p className="text-4xl font-mono">{formatTime()}</p>
        {secondsLeft === 0 && <p className="text-green-400 font-semibold">Session complete!</p>}
        <div className="space-x-2">
          <button
            onClick={() => setIsActive(!isActive)}
            className="px-3 py-1 rounded bg-blue-600 hover:bg-blue-700"
          >
            {isActive ? 'Pause' : 'Resume'}
          </button>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded bg-gray-700 hover:bg-gray-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PomodoroModal;
