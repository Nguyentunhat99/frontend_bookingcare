import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoggedIn: false,
    userInfo: null,
    doctorsData: '',
    AllDoctor: [],
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                userInfo: action.userInfo
            }
        case actionTypes.USER_LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                userInfo: null
            }
        case actionTypes.PROCESS_LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                userInfo: null
            }
        case actionTypes.FETCH_TOP_DOCTOR_HOME_SUCCESS:
            state.doctorsData = action.data;//luu data vao state copy
            return {
                ...state,
            }
        case actionTypes.FETCH_TOP_DOCTOR_HOME_FAILED:
            state.doctorsData = [];
            return {
                ...state,
            }   
        case actionTypes.FETCH_ALL_DOCTOR_SUCCESS:
            state.AllDoctor = action.data;//luu data vao state copy
            return {
                ...state,
            }
        case actionTypes.FETCH_ALL_DOCTOR_FAILED:
            state.AllDoctor = [];
            return {
                ...state,
            }            
        default:
            return state;
    }
}

export default userReducer;