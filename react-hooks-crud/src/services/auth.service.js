import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const signup = (name, email, password) => {
    return axios.post(API_URL + "signup", {
        name,
        email,
        password,
    });
};
const login = (name, password) => {
    return axios.post(API_URL + "signin", {
        name,
        password,
    })
    .then((response) => {
        if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    });
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

export default {
    signup,
    login,
    logout,
    getCurrentUser,
};