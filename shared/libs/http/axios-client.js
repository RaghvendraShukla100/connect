// Axios HTTP client for calling external APIs
import axios from "axios";

const client = axios.create({
  baseURL: process.env.EXTERNAL_API_BASE_URL || "",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

client.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("HTTP Client Error:", error.message);
    return Promise.reject(error);
  }
);

export default client;
