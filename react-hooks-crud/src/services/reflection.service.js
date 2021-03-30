import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/";

const getAll = () => {
    return axios.get(API_URL + "reflections", { headers: authHeader() });
};

// const get = id => {
//     return http.get(`/reflections/${id}`);
// };

// const create = data => {
//     return http.post(`/users/5fdc2b3b33d89103b4dba73e/reflections`, data);
//     // return http.post(`/users/${id}/reflections`, data);
// };

// const update = (id, data) => {
//     return http.put(`/reflections/${id}`, data);
// };

// const remove = id => {
//     return http.delete(`/reflections/${id}`);
// };

// const findToday = title => {
//     return http.get(`/reflections?Today=2020-12-18T04:08:27.173Z`);
//     // return http.get(`/reflections?Today=${createdAt}`);
// };

export default {
    getAll
    // get,
    // create,
    // update,
    // remove,
    // findToday
};