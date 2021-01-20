import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    DECONECT
  } from "../Actions/Types";



let initState = {
token:localStorage.getItem('token'),
user: null,
isAuth: false,
errors : null,
userName:localStorage.getItem('userName')

}





const authReducer = (state = initState, action) => {
    switch (action.type) {
        case LOAD_USER_SUCCESS:
            return {
                ...state,
                user : action.payload,
                errors: null
            }
            case LOGIN_SUCCESS:
       case REGISTER_SUCCESS:
           localStorage.setItem('token', action.payload.token)
           localStorage.setItem('userName', action.payload.userName)
       return {
           ...state,
           token:action.payload.token,
           isAuth : true,
           errors: null,
           userName:action.payload.userName
       }
       case LOGIN_FAIL:
       case LOAD_USER_FAIL:
       case REGISTER_FAIL:
        localStorage.removeItem('token')
        localStorage.removeItem('userName')
    return {
        ...state,
        isAuth : false,
        errors: action.payload,
    }
    case DECONECT:
        localStorage.removeItem('token')
        localStorage.removeItem('userName')
    return {
        token:localStorage.getItem('token'),
user: null,
isAuth: false,
errors : null,
userName:localStorage.getItem('userName')
    }
        default:
           return state
    }
}




export default authReducer;