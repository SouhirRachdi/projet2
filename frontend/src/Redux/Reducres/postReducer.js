import { LOAD_POST,GET_ALL,GET_ALL_FAIL, 
    CREATE_SUCCESS,CREATE_FAIL, UPDATE,GET_POST,GET_POST_FAIL, DELETE,COMMENT_SUCCESS,COMMENT_FAIL,LIKE } 
    from '../ActionsTypes/postConstant';
    
    const intialState = {
        loading: false,
        posts: [],
        post:{
        },
        errors: null,
      };
      export const postReducer = (state = intialState, { type, payload }) => {
        switch (type) {
          case  LOAD_POST:
            return { ...state, loading: true };
            case CREATE_SUCCESS:
              return { ...state,post:payload, loading: false };
              case CREATE_FAIL:
              return { ...state,errors: payload};
              case GET_ALL:
               return { ...state, posts: payload, loading: false };
              case GET_ALL_FAIL:
               return { ...state, errors: payload };
               case GET_POST:
                return { ...state, post: payload.getOnePost, loading: false };
               case GET_POST_FAIL:
                return { ...state, errors: payload }; 
                case LIKE:
                  return { ...state, posts:state.post}
            
                case COMMENT_SUCCESS:
                  return { ...state, post:payload}
                 case COMMENT_FAIL:
                  return { ...state, errors: payload };             
               case UPDATE:
          return {...state,posts:state.posts.map((post) => (post._id == payload._id ? payload : post))};
          case DELETE:
         return  { ...state, posts:state.posts.filter((post) => (post._id == payload._id ? payload : post))}; 
    
              default:
          return state;
        }
    
    }