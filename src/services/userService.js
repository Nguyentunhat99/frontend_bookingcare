import axios from "../axios"

export const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/v1/login', { email:userEmail, password:userPassword });
}

export const getAllUsers = (inputId)=>{
    // console.log('input id',inputId);
    return axios.get(`/api/v1/getAllUsers?id=${inputId}`)
}
//Gọi api

