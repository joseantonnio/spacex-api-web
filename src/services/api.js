import axios from "axios";
import env from "react-dotenv";

const API = axios.create({
  baseURL: env.GATEWAY_API_URL,
});

export default API;