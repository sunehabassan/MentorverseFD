import axios from 'axios';

const api = axios.create({
    baseURL: "https://mentorbackend-i3ht.onrender.com",
    // withCredentials: true,
});

export const googleAuth = (code) => api.post(`/google?code=${code}`);