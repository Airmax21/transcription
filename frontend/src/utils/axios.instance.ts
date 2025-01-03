import { store } from "@/store";
import axios from "axios";

const requestInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL + '/'
})

requestInstance.interceptors.request.use(
    (config) => {
        const state = store.getState(); // Ambil state Redux
        const token = state.auth?.token; // Ambil token dari Redux state
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default requestInstance;