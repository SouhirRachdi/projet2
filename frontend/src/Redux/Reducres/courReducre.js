import {LOAD_COURS,
    ADD_COURS_SUCCESS,
    ADD_COURS_FAIL,
    GET_COUR_SUCCESS,
    GET_COUR_FAIL,
    GET_ALL_COURS_SUCCESS,
    GET_ALL_COURS_FAIL}from "../ActionsTypes/CourConstant" 

    const initialState = {
        loading: false,
        cour:{},
        errors: null,
        courses:[]
      };
      export const courReducer = (state = initialState, { type, payload }) => {
        switch (type) {
          case LOAD_COURS:
            return { ...state, loading: true };
          case ADD_COURS_SUCCESS:
            return {...state, cour:payload, loading: false }
          case ADD_COURS_FAIL:
            return { ...state, errors: payload };
          case GET_ALL_COURS_SUCCESS:
           return { ...state, courses: payload.allCours, loading: false };
          case GET_ALL_COURS_FAIL:
           return { ...state, errors: payload, loading: false };
           case LOAD_COURS:
            return  {...state,loading:true}
          case GET_COUR_SUCCESS:
           return  {...state,cour:payload.oneCour,loading:false}
          case GET_COUR_FAIL:
            return { ...state, errors: payload, loading: false };
          default:
           return state;
        }
      };
      