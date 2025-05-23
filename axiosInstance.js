//axiosInstance.js
import { baseURL } from "./config";
import axios from "axios";
const instance= axios.create({
    baseURL,
    timeout:1000,
})

//  REquest interceptors
instance.interceptors.request.use(
    async(config)=>{
        try{
            const accessToken= localStorage.getItem("accessToken");
            config.headers.Authorization=`Bearer ${accessToken}`;
            return config;
         } catch (error){
                console.error("Error setting Authorization header:",error);
                return Promise.reject(error);
            }
        }
    
);

//response interceptors
instance.interceptors.response.use(
    (response)=>{
        console.log("response data:", response.data );
        return response;
    },
    (error)=>{
        console.error("Response error:",error);
        if(error.response.status === 401){
            console.log("unauthorized error, redirecting to login...")
        }
        return Promise.reject(error)
    }
)
export default instance