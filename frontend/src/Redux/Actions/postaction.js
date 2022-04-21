import axios from "axios";
import { LOAD_POST,
  GET_ALL,
  GET_ALL_FAIL,
   CREATE_SUCCESS,
   CREATE_FAIL,
    UPDATE,
    GET_POST,
    GET_POST_FAIL,
     DELETE,
     COMMENT_SUCCESS,
     COMMENT_FAIL,
     LIKE,
     GET_ONEPOST_SUCCESS,
     GET_ONEPOST_FAIL
     } from '../ActionsTypes/postConstant';


//createPOst
export const createPost = (newPost,navigate) => async (dispatch) => {
    dispatch({ type: LOAD_POST });
    try {
      const opts = {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      };
        const {data} = await axios.post(
            "http://localhost:5000/post/addPost",newPost,opts
            
          );
          dispatch({ type: CREATE_SUCCESS, payload: data })
          navigate("/posts");
        } catch (error) {
            console.dir(error)
            dispatch({ type: CREATE_FAIL, payload: error });
        } 
        };
        
      //getPOsts  
        export const getPosts = () => async (dispatch) => {
            dispatch({ type: LOAD_POST });
            try {
                const {data} = await axios.get(
                    "http://localhost:5000/post/allPosts"
                    
                  );
                  console.log(data)
                  dispatch({ type: GET_ALL, payload: data.getAllPosts })
                } catch (error) {
                    console.dir(error)
                    dispatch({ type: GET_ALL_FAIL, payload: error });
                } 
                };

//getPost 
export const getPost = (id) => async (dispatch) => {
    dispatch({ type: LOAD_POST });
    try {
        const opts = {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
          };
        const {data} = await axios.get(
            `http://localhost:5000/post/getPost/${id}`,opts);
          dispatch({ type:GET_POST , payload: data })
        } catch (error) {
            console.dir(error)
            dispatch({ type: GET_POST_FAIL, payload: error });
        } 
        };   

//updatePOst
    export const updatePost = (id,postUp) => async (dispatch) => {
      try {
        const opts = {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        };
            const {data} = await axios.put(
              `http://localhost:5000/post/upDatePost/${id}`,postUp,opts);
                         
               dispatch({ type:UPDATE , payload: data })
               dispatch(getPost());
              } catch (error) {
             console.dir(error)
           } 
             };       

  //deletePOst           
  export const deletePost = (id) => async (dispatch) => {
    try {
      const opts = {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      };
          const {data} = await axios.delete(
            `http://localhost:5000/post/deletePost/${id}`,opts);
                       
             dispatch({ type:DELETE , payload: data })
             dispatch(getPosts());
            
            } catch (error) {
           console.dir(error)
         } 
           };   

  //commentPOst
    export const commentPost = (id,newcomment) => async (dispatch) => {
      try {
        const opts = {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        };
            const respense = await axios.put(
              `http://localhost:5000/post/commentPost/${id}`,{text:newcomment,
            postId:id},opts);
                         
               dispatch({ type:COMMENT_SUCCESS , payload: respense.data })
              } catch (error) {
             console.dir(error)
             dispatch({ type: COMMENT_FAIL, payload: error });
             
           } 
             }; 
             
//likePOst
export const likePost = (id) => async (dispatch) => {
  try {
    const opts = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
        const {data} = await axios.put(
          `http://localhost:5000/post/likePost/${id}`,opts);
                     
           dispatch({ type:LIKE , payload: data })
          } catch (error) {
         console.dir(error)
     
       } 
         };       
             