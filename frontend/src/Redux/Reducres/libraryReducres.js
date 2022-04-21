import {LOAD_LIBRARY,
    CREATE_LIBRARY_SUCCESS,
    CREATE_LIBRARY_FAIL,
    DELETE_LIBRARY,
    GET_VIDEO,
    GET_VIDEO_FAIL,
    GET_ALL_LIBRARY,
    GET_ALL_LIBRARY_FAIL
  }
    from "../ActionsTypes/LibraryConstatnt"
    const initialState = {
        loading: false,
        videos: [],
        video:{},
        errors: null,
      };
      export const libraryReducer = (state = initialState, { type, payload }) => {
        switch (type) {
          case LOAD_LIBRARY:
            return { ...state, loading: true };
          case CREATE_LIBRARY_SUCCESS:
            return {...state, video:payload, loading: false }
          case  CREATE_LIBRARY_FAIL:
            return { ...state, errors: payload };
          case GET_ALL_LIBRARY:
           return { ...state, videos: payload.allVideos , loading: false };
          case  GET_ALL_LIBRARY_FAIL:
           return { ...state, errors: payload, loading: false };
          default:
           return state;
        }
      };