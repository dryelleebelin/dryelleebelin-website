import axios from "axios";

export const api = axios.create({
    baseURL: "https://portfolio-backend-dlhv.onrender.com",
    //baseURL: "http://localhost:3333",
    timeout: 8000,
    headers: {
        "Content-Type": "application/json",
    }
});