import axios from 'axios'

const base_url = import.meta.env.API_URL;
const axiosClient = axios.create({
    baseURL: 'http://localhost:3000/api',
    withCredentials: true
})

export default axiosClient;