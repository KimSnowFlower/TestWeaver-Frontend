import axios from "axios";

const instance = axios.create({
    baseURL: "https://13.125.96.222:4000/api/v1",
    withCredentials: true,
});

instance.interceptors.response.use(
    (res) => res,
    (err) => {
        console.log("[API ERROR]", err.response);
        throw err.response?.data || err;
    }
);

export default instance;