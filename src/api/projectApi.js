import api from "./axios";

export const projectApi = {
    list: async (q = "") => {
        const res = await api.get("/projects", {
            params: { q }
        });

        return res.data.data;
    },

    create: async (data) => {
        const res = await api.post("/projects", data);

        return res.data.data;
    },

    detail: async (id) => {
        const res = await api.get(`/projects/${id}`);

        return res.data.data;
    },

    update: async (id, data) => {
        const res = await api.put(`/projects/${id}`, data);

        return res.data.data;
    },

    remove: async (id) => {
        const res = await api.delete(`/projects/${id}`);

        return res.data.data;
    }
};