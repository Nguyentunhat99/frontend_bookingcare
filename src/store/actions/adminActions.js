import actionTypes from './actionTypes';
import { createNewUserService, 
        getAllCodeService, 
        getAllUsers, 
        deleteUserService, 
        UpdateUserService,
    } from '../../services/userService';
import { toast } from 'react-toastify';
// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START
// })

export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_GENDER_START });
            let res = await getAllCodeService("GENDER");//lay du lieu
            if( res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data));
            } else {
                dispatch(fetchGenderFailed());
            }
        } catch (error) {
            dispatch(fetchGenderFailed())
            console.log('fetchGenderStart error:',error);
            
        }
    }
}

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData,
})

export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED
})

export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("POSITION");//lay du lieu
            if( res && res.errCode === 0) {
                dispatch(fetchPositionSuccess(res.data));
            } else {
                dispatch(fetchPositionFailed());
            }
        } catch (error) {
            dispatch(fetchPositionFailed())
            console.log('fetchPositionStart error:',error);
            
        }
    }
}

export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData,
})

export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILED
})

export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("ROLE");//lay du lieu
            if( res && res.errCode === 0) {
                dispatch(fetchRoleSuccess(res.data));
            } else {
                dispatch(fetchRoleFailed());
            }
        } catch (error) {
            dispatch(fetchRoleFailed())
            console.log('fetchRoleStart error:',error);
            
        }
    }
}

export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData,
})

export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED
})


export const createNewUser = (data) => {
    console.log('data:',data);
    return async (dispatch, getState) => {
        try {
            let res = await createNewUserService(data);//lay du lieu
            console.log('res',res);
            if( res && res.errCode === 0) {
                toast.success(res.errMessage);
                dispatch(createNewUserSuccess());
                dispatch(fetchAllUsersStart());
            } else {
                toast.error(res.errMessage);
                dispatch(createNewUserFailed());
            }
        } catch (error) {
            toast.error('Create user failed');
            dispatch(createNewUserFailed())
            console.log('createNewUser error:',error);
        }
    }
}

export const createNewUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS,
})

export const createNewUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAILED
})

export const fetchAllUsersStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllUsers("ALL");//lay du lieu
            // console.log('res',res.users);
            if( res && res.errCode === 0) {
                dispatch(fetchAllUsersSuccess(res.users.reverse()));
            } else {
                dispatch(fetchAllUsersFailed());
            }
        } catch (error) {
            dispatch(fetchAllUsersFailed())
            console.log('fetchAllUsersStart error:',error);
        }
    }
}

export const fetchAllUsersSuccess = (usersData) => ({
    type: actionTypes.FETCH_ALL_USER_SUCCESS,
    data: usersData,
})

export const fetchAllUsersFailed = () => ({
    type: actionTypes.FETCH_ALL_USER_FAILED
})

export const DeleteUserStart = (userId) => {
    console.log('userId', userId);
    return async (dispatch, getState) => {
        try {
            let res = await deleteUserService(userId);//lay du lieu
            console.log('res',res);
            if( res && res.errCode === 0) {
                toast.success(res.errMessage);
                dispatch(DeleteUserSuccess());
                dispatch(fetchAllUsersStart());
            } else {
                toast.error("Delete Failed!");
                dispatch(DeleteUserFailed());
            }
        } catch (error) {
            toast.error("Delete Failed!");
            dispatch(DeleteUserFailed())
            console.log('DeleteUserStart error:',error);
        }
    }
}

export const DeleteUserSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS,
})

export const DeleteUserFailed = () => ({
    type: actionTypes.DELETE_USER_FAILED
})


export const editUserStart = (data) => {
    console.log('data', data);
    return async (dispatch, getState) => {
        try {
            let res = await UpdateUserService(data);//lay du lieu
            if( res && res.errCode === 0) {
                toast.success(res.errMessage);
                dispatch(editUserSuccess());
                dispatch(fetchAllUsersStart());
            } else {
                // toast.error("Update Failed!");
                dispatch(editUserFailed());
            }
        } catch (error) {
            // toast.error("Update Failed!");
            dispatch(editUserFailed())
            console.log('editUserStart error:',error);
        }
    }
}

export const editUserSuccess = () => ({
    type: actionTypes.EDIT_USER_SUCCESS,
})

export const editUserFailed = () => ({
    type: actionTypes.EDIT_USER_FAILED
})
