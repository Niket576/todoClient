import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8080/api/v1", // or just http://localhost:8080
});

// Services
const registerUser = (data) => API.post("/user/register", data);
const loginUser = (data) => API.post("/user/login", data);

const AuthServices = { registerUser, loginUser };
export default AuthServices;
