
import {SIGNIN_SUCCESS,
  SIGNIN_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOAD_USER,
  LOGOUT,
  USER_SUCCESS,
  USER_FAIL,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAIL,
  GET_ALL_USER_SUCCESS,
  GET_ALL_USER_FAIL,
  DELET_USER_SUCCESS,
  DELET_USER_FAIL,
  GET_USER_SUCCESS,
  GET_USER_FAIL
}
 from "../ActionsTypes/UserConstant"
const intialState = {
    loading: false,
    currentUser: {},
    users:[],
    errors: null,
  };
  export const userReducer = (state = intialState, { type, payload }) => {
    switch (type) {
      case LOAD_USER:
        return { ...state, loading: true };
      case SIGNIN_SUCCESS:
        localStorage.setItem("token",payload.token)
        return { ...state, currentUser: payload.user, loading: false };
      case SIGNIN_FAIL:
        return { ...state, errors: payload, loading: false };
      case SIGNUP_SUCCESS:
        return { ...state, currentUser: payload, loading: false };
      case SIGNUP_FAIL:
        return { ...state, errors: payload, loading: false };
        case USER_SUCCESS:
          return { ...state, currentUser: payload, loading: false };
        case USER_FAIL:
            return { ...state, errors: payload, loading: false };
        case EDIT_USER_SUCCESS:
          return {...state,currentUser:payload,loading:false}    
        case EDIT_USER_FAIL:
            return {...state,errors:payload,loading:false}
        case DELET_USER_SUCCESS:
          return {...state,currentUser:payload,loading:false}    
        case DELET_USER_FAIL:
            return {...state,errors:payload,loading:false}
        case GET_ALL_USER_SUCCESS:
            return { ...state, users: payload.allUsers, loading: false };
        case GET_ALL_USER_FAIL:
             return { ...state, errors: payload, loading: false }; 
       case  GET_USER_SUCCESS:
            return { ...state, currentUser: payload.oneUser, loading: false };
       case GET_USER_FAIL:
             return { ...state, errors: payload }; 
     case LOGOUT:
      localStorage.removeItem("token")
      return { loading: false,
         currentUser: {},
         errors: null}
    
  
    default:
      return state;
  }
};