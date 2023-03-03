import axios from "../axios"

export const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/v1/login', { email:userEmail, password:userPassword });
}

export const getAllUsers = (inputId)=>{
    // console.log('input id',inputId);
    return axios.get(`/api/v1/getAllUsers?id=${inputId}`)
}

export const createNewUserService = (data) => {
    console.log('data:',data);

    return axios.post('/api/v1/createNewUser', data)
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


export const getAllCodeService = (inputType)=>{
    return axios.get(`/api/v1/allCode?type=${inputType}`)
}

export const getTopDoctorHomeService = (limit) => {
    return axios.get(`/api/v1/top-doctor-home?limit=${limit}`)
}

export const getAllDoctorService = () => {
    return axios.get('/api/v1/get-all-doctor')
}

export const saveDetailInforDoctorService = (data) => {
    console.log('data:',data);
    return axios.post('/api/v1/detail-infor-doctor', data)
}

export const getDetailInforDoctorByIdService = (id) => {
    console.log('detail infor doctor by id:',id);
    return axios.get(`/api/v1/get-detail-infor-doctor-by-id?id=${id}`)
}
//Call api