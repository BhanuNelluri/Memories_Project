import axios from 'axios';

const API = axios.create({ baseURL: "http://localhost:4001/" });

API.interceptors.request.use((req,res) => {
    if (localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req;
});


export const fetchTasks = (id) => API.get(`/${id}/tasks`);
export const createTask = (newTask) => API.post(`/newTask`, newTask);
export const updateTask = (task) => API.patch(`/update`,task);
export const deleteTask = (id) => API.delete(`/${id}/delete`);

export const signIn = (formData) => API.post('/users/signin', formData);
export const signUp = (formData) => API.post('/users/signup', formData);