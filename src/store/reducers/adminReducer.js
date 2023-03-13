import actionTypes from '../actions/actionTypes';

const initialState = {//state cua redux
    genders: [],
    roles:[],
    positions:[],
    isLoadingGender: false,
    usersData:[],
    deleteUserId: '',
    hourData: []
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            let copyState = {...state};
            copyState.isLoadingGender = true;
            return {
                ...copyState,
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            state.genders = action.data;//luu date vao state copy
            state.isLoadingGender = false;
            return {
                ...state,
            }
        case actionTypes.FETCH_GENDER_FAILED:
            state.isLoadingGender = false;
            state.genders = [];
            return {
                ...state,
            }
        case actionTypes.FETCH_POSITION_SUCCESS:
            state.positions = action.data;//luu date vao state copy
            return {
                ...state,
            }
        case actionTypes.FETCH_POSITION_FAILED:
            state.positions = [];
            return {
                ...state,
            }
        case actionTypes.FETCH_ROLE_SUCCESS:
            state.roles = action.data;//luu date vao state copy
            return {
                ...state,
            }
        case actionTypes.FETCH_ROLE_FAILED:
            state.roles = [];
            return {
                ...state,
            }
        case actionTypes.FETCH_ALL_USER_SUCCESS:
            state.usersData = action.data;//luu date vao state copy
            return {
                ...state,
            }
        case actionTypes.FETCH_ALL_USER_FAILED:
            state.genders = [];
            return {
                ...state,
            }
        case actionTypes.FETCH_HOUR_SUCCESS:
            state.hourData = action.data;//luu date vao state copy
            return {
                ...state,
            }
        case actionTypes.FETCH_HOUR_FAILED:
            state.hourData = [];
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default adminReducer;