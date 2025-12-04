import axios from "axios";

const API_URL = "http://localhost:5000/api/auth/";

export const register = async (data) => (await axios.post(API_URL + "register", data)).data;
export const login = async (data) => (await axios.post(API_URL + "login", data)).data;
