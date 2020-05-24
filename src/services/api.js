import axios from "axios";
import defaultConfig from "../configs/defaultConfig";

const api = axios.create({
  baseURL: defaultConfig.baseURL + "/api",
});

export default api;
