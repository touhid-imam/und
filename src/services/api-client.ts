import axios, { AxiosRequestConfig } from "axios";

const API_BASE_URL = import.meta.env.VITE_UND_API_BASE_URL;

export interface FetchResponse<T>{
    count?: number;
    next?: string | null;
    results: T[];
}

const axiosInstance =  axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string){
        this.endpoint = endpoint;
        // console.log('API Base URL:', API_BASE_URL);
    }

    getAll = (config?: AxiosRequestConfig) => {
        return axiosInstance
            .get<FetchResponse<T>>(this.endpoint, config)
            .then(res => res.data)
    }

    get = (id: number | string) => {
        return axiosInstance.get<T>(this.endpoint + '/' + id).then(res => res.data)
    }
}

export default APIClient;