import axios from "axios";

const api = axios.create({
  baseURL: "http://YOUR-EC2-IP:3000/api",
});

export default api;
