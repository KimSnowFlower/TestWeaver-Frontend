import api from "./axios";

export const authApi = {
    register: async (data) => {
        const res = await api.post("/auth/register", data);

        return res.data.data;
    },

    login: async (data) => {
        const res = await api.post("/auth/login", data);

        return res.data.data;
    },

    logout: async () => {
        const res = await api.post("/auth/logout");

        return res.data.success;
    },

    findId: async (data) => {
        const res = await api.post("/auth/find-id", data);

        return res.data.data;
    },

    resetPassword: async (data) => {
        const res = await api.post("/auth/reset-password", data);

        return res.data.data;
    },

    changePassword: async (data) => {
        const res = await api.post("/auth/change-password", data);

        return res.data.success;
    },
};