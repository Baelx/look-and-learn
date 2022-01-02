import axios from 'axios';

export const getAxiosInstance = () => {
    const baseUrl = "http://localhost:8080"
    const axiosInstance = axios.create({
      baseURL: baseUrl,
      timeout: 5000,
    });

    return axiosInstance;
};
  
export default getAxiosInstance;