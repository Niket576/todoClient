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








import axios from "axios";

// get user token
const user = JSON.parse(localStorage.getItem("todoapp"));

// default auth header
if (user?.token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
}

// base URL (from environment variable)
const API = process.env.REACT_APP_API_URL + "/todo";

// CREATE TODO
const createTodo = (data) => {
    return axios.post(`${API}/create`, data);
};

// GET ALL TODO
const getAllTodo = (id) => {
    return axios.post(`${API}/getAll/${id}`);
};

// UPDATE TODO
const updateTodo = (id, data) => {
    return axios.patch(`${API}/update/${id}`, data);
};

// DELETE TODO
const deleteTodo = (id) => {
    return axios.delete(`${API}/delete/${id}`);
};

const TodoServices = { createTodo, getAllTodo, updateTodo, deleteTodo };
export default TodoServices;

