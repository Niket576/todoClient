// import axios from "axios";

// //get user token
// const user = JSON.parse(localStorage.getItem("todoapp"));

// //default auth header
// axios.defaults.headers.common["Authorization"] = `bearer ${user.token}`;


// //CRETE TODO
// const createTodo = (data) => {
//     return axios.post("/todo/create", data);
// };
// //GET ALL TODO
// const getAllTodo = (id) => {
//     return axios.post(`/todo/getAll/${id}`);
// };

// //UPDATE TODO
// const updateTodo = (id, data) => {
//     return axios.patch("/todo/update/" + id, data);
// };

// //DLEETE TODO
// const deleteTodo = (id) => {
//     return axios.delete("/todo/delete/" + id);
// };

// const TodoServices = { createTodo, getAllTodo, updateTodo, deleteTodo };
// export default TodoServices;








// import axios from "axios";

// // get user token
// const user = JSON.parse(localStorage.getItem("todoapp"));

// // default auth header
// if (user?.token) {
//     axios.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
// }

// // base URL (from environment variable)
// const API = process.env.REACT_APP_API_URL + "/todo";

// // CREATE TODO
// const createTodo = (data) => {
//     return axios.post(`${API}/create`, data);
// };

// // GET ALL TODO
// const getAllTodo = (id) => {
//     return axios.post(`${API}/getAll/${id}`);
// };

// // UPDATE TODO
// const updateTodo = (id, data) => {
//     return axios.patch(`${API}/update/${id}`, data);
// };

// // DELETE TODO
// const deleteTodo = (id) => {
//     return axios.delete(`${API}/delete/${id}`);
// };

// const TodoServices = { createTodo, getAllTodo, updateTodo, deleteTodo };
// export default TodoServices;




// import axios from "axios";

// // Create axios instance with base URL
// const API = axios.create({
//     baseURL: process.env.REACT_APP_API_URL + "/todo",
// });

// // Add Authorization header automatically
// API.interceptors.request.use((config) => {
//     const user = JSON.parse(localStorage.getItem("todoapp"));
//     if (user?.token) {
//         config.headers.Authorization = `Bearer ${user.token}`;
//     }
//     return config;
// });

// // CREATE TODO
// const createTodo = (data) => API.post("/create", data);

// // GET ALL TODO (GET request)
// const getAllTodo = (id) => API.get(`/getAll/${id}`);

// // UPDATE TODO
// const updateTodo = (id, data) => API.patch(`/update/${id}`, data);

// // DELETE TODO
// const deleteTodo = (id) => API.delete(`/delete/${id}`);

// const TodoServices = { createTodo, getAllTodo, updateTodo, deleteTodo };
// export default TodoServices;



import axios from "axios";

// Create axios instance with base URL
const API = axios.create({
    baseURL: process.env.REACT_APP_API_URL + "/todo", // e.g., http://localhost:5000/api/v1/todo
});

// Automatically add Authorization header if token exists
API.interceptors.request.use((config) => {
    const user = JSON.parse(localStorage.getItem("todoapp"));
    if (user?.token) {
        config.headers.Authorization = `Bearer ${user.token}`;
    }
    return config;
});

// CREATE TODO
const createTodo = (data) => API.post("/create", data);

// GET ALL TODO for a user (POST request to match backend)
const getAllTodo = (userId) => API.post(`/getAll/${userId}`);

// UPDATE TODO
const updateTodo = (id, data) => API.patch(`/update/${id}`, data);

// DELETE TODO
const deleteTodo = (id) => API.delete(`/delete/${id}`);

const TodoServices = {
    createTodo,
    getAllTodo,
    updateTodo,
    deleteTodo,
};

export default TodoServices;
