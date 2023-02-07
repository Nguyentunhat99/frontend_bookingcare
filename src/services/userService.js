import axios from "../axios"

export const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/v1/login', { email:userEmail, password:userPassword });
}

export const getAllUsers = (inputId)=>{
    // console.log('input id',inputId);
    return axios.get(`/api/v1/getAllUsers?id=${inputId}`)
}

export const createNewUserService = (data) => {
    return axios.post(`/api/v1/createNewUser`, data)
}
export const deleteUserService = (userId)=>{
    // console.log('input id',id);
    return axios.delete('/api/v1/deleteUser',{
        data: {
            id: userId
        }
    })
}

export const UpdateUserService = (data)=>{
    // console.log('input id',id);
    return axios.put('/api/v1/updateUser', data)
}
//Call api

