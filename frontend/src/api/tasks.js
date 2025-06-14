import axios from 'axios';

const BASE_URL = 'https://timetable-psie.onrender.com/api/tasks';

export const getTasks = async (userId) => {
  const res = await axios.get(`${BASE_URL}/${userId}`);
  return res.data;
};

export const createTask = async ({ userId, task, time, repeatDaily, startDate }) => {
  await axios.post(BASE_URL, {
    userId,
    task,
    time,
    repeatDaily,
    startDate
  });
};

export const updateTask = async (taskId, updates) => {
  await axios.patch(`${BASE_URL}/${taskId}`, updates);
};

