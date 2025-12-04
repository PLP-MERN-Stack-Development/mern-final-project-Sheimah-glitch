import axios from "axios";
const API_URL = "http://localhost:5000/api/tasks/";

export const getTasksByProject = async (projectId, token) => {
  const res = await axios.get(`${API_URL}project/${projectId}`, { headers: { Authorization: `Bearer ${token}` } });
  return res.data;
};

export const createTask = async (data, token) => {
  const res = await axios.post(API_URL, data, { headers: { Authorization: `Bearer ${token}` } });
  return res.data;
};
