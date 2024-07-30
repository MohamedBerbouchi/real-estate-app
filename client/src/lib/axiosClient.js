import axios from 'axios'

const base_url = import.meta.env.API_URL;
const axiosClient = axios.create({
    baseURL:import.meta.env.VITE_API_URL,
    withCredentials: true
})

export default axiosClient;