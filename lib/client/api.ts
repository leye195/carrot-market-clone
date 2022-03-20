import axios from "axios";

const api = axios.create({
  baseURL: "/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (res) => {
    const { data } = res;
    return data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
