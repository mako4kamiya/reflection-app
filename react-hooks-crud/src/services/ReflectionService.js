import http from "../http-common";

const getAll = () => {
    return http.get(`/users/${id}/reflections`);
};

const get = id => {
    return http.get(`/reflections/${id}`);
};

const create = data => {
    return http.post(`/users/${id}/reflections`, data);
};

const update = (id, data) => {
    return http.put(`/users/${id}/reflections`, data);
};

const remove = id => {
    return http.delete(`/users/${id}/reflections`);
};

const findToday = title => {
    return http.get(`/reflections?Today=${createdAt}`);
};

export default {
    getAll,
    get,
    create,
    update,
    remove,
    findToday
};