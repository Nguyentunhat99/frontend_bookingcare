import actionTypes from './actionTypes';
import { getTopDoctorHomeService, getAllDoctorService, saveDetailInforDoctorService } from '../../services/userService';
import { toast } from 'react-toastify';

export const addUserSuccess = () => ({
    type: actionTypes.ADD_USER_SUCCESS
})


export const userLoginSuccess = (userInfo) => ({
    type: actionTypes.USER_LOGIN_SUCCESS,
    userInfo: userInfo
})

export const userLoginFail = () => ({
    type: actionTypes.USER_LOGIN_FAIL,
});

export const processLogout = () => ({
    type: actionTypes.PROCESS_LOGOUT,
});

export const fetchTopDoctorHomeStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getTopDoctorHomeService(5);//lay du lieu
            console.log('res doctor', res);
            if( res && res.errCode === 0) {
                dispatch(fetchTopDoctorHomeSuccess(res.data));
            } else {
                dispatch(fetchTopDoctorHomeFailed());
            }
        } catch (error) {
            dispatch(fetchTopDoctorHomeFailed())
            console.log('fetchTopDoctorHomeStart error:',error);
            
        }
    }
}

export const fetchTopDoctorHomeSuccess = (doctorsData) => ({
    type: actionTypes.FETCH_TOP_DOCTOR_HOME_SUCCESS,
    data: doctorsData,
})

export const fetchTopDoctorHomeFailed = () => ({
    type: actionTypes.FETCH_TOP_DOCTOR_HOME_FAILED
})

export const fetchAllDoctorStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllDoctorService();//lay du lieu
            console.log('res all doctor', res);
            if( res && res.errCode === 0) {
                dispatch(fetchAllDoctorSuccess(res.data));
            } else {
                dispatch(fetchAllDoctorFailed());
            }
        } catch (error) {
            dispatch(fetchAllDoctorFailed())
            console.log('fetchAllDoctorStart error:',error);
            
        }
    }
}

export const fetchAllDoctorSuccess = (AllDoctor) => ({
    type: actionTypes.FETCH_ALL_DOCTOR_SUCCESS,
    data: AllDoctor,
})

export const fetchAllDoctorFailed = () => ({
    type: actionTypes.FETCH_ALL_DOCTOR_FAILED
})

export const saveDetailInforDoctorStart = (data) => {
    console.log(data)
    return async (dispatch, getState) => {
        try {
            let res = await saveDetailInforDoctorService(data);//lay du lieu
            console.log('res all doctor', res);
            if( res && res.errCode === 0) {
                toast.success(res.errMessage);
                dispatch(saveDetailInforDoctorSuccess());
            } else {
                toast.error(res.errMessage);
                dispatch(saveDetailInforDoctorFailed());
            }
        } catch (error) {
            dispatch(saveDetailInforDoctorFailed())
            console.log('saveDetailInforDoctorStart error:',error);
            
        }
    }
}

export const saveDetailInforDoctorSuccess = () => ({
    type: actionTypes.SAVE_DETAIL_INFOR_DETAIL_SUCCESS,
})

export const saveDetailInforDoctorFailed = () => ({
    type: actionTypes.SAVE_DETAIL_INFOR_DETAIL_FAILED
})
