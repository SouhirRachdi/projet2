import axios from "axios";
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
   from "../ActionsTypes/UserConstant";
 
export const signUp = (newUser, navigate) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const response = await axios.post(
      "http://localhost:5000/user/signup",
      newUser
    );
    dispatch({ type: SIGNUP_SUCCESS, payload: response.data.newUser })
    navigate("/");
  } catch (error) {
    console.dir(error)
    alert(error.response.data.errors.forEach(el=>alert(el.msg)))
    dispatch({ type: SIGNUP_FAIL, payload: error });
     /* if(!error.response.data.msg)
{   alert(error.response.data.msg)
} */ 
  }
};
  export const signinUser = (user, navigate) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
      const response = await axios.post("http://localhost:5000/user/signin", user);
      dispatch({ type: SIGNIN_SUCCESS, payload: response.data });
      (navigate("/dashboard"))
    } catch (error) {
      console.dir(error);
      dispatch({ type: SIGNIN_FAIL, payload: error });
    }
  };
  export const logout=(navigate)=> async (dispatch)=> {
    dispatch({type:LOGOUT}) 
    navigate("/");
 
}
export const getUser = () => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const opts = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    const response = await axios.get(
      "http://localhost:5000/user/current",
      opts
    );
    dispatch({ type: USER_SUCCESS, payload: response.data.user });
 
  } catch (error) {
    console.dir(error);
    dispatch({ type: USER_FAIL, payload: error });
  }
};
export const editUser = (idUser,userUpdated,navigate) => async (dispatch) => {
  try {
    const response = await axios.put(`http://localhost:5000/user/${idUser}`,userUpdated);
    console.log(response)
    dispatch({ type: EDIT_USER_SUCCESS,payload:response.data.current });
    dispatch(getUser());
    navigate("/profil")
  } catch (error) {
    console.dir(error);
    dispatch({ type: EDIT_USER_FAIL, payload: error });
  }
};
export const getAllStudent =()=>async (dispatch) =>{
  dispatch({ type: LOAD_USER });
try{
  const opts = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
const response=await axios.get("http://localhost:5000/user/all", opts);
dispatch({ type: GET_ALL_USER_SUCCESS, payload: response.data});
//console.log(response.data.allUsers)
}
catch(error){
  console.dir(error);
  dispatch({ type: GET_ALL_USER_FAIL, payload: error });
}
};
export const deleteUser = (idUser) => async (dispatch) => {
  try {
    const response = await axios.delete(
      `http://localhost:5000/user/${idUser}`
    );
    dispatch({ type: DELET_USER_SUCCESS });
    dispatch(getAllStudent());
  } catch (error) {
    console.dir(error);
    dispatch({ type: DELET_USER_FAIL, payload: error });
  }
};
//getuser 
export const getoneUser = (id) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        
        const respense = await axios.get(
            `http://localhost:5000/user/getuserbyid`);
          dispatch({ type:GET_USER_SUCCESS , payload: respense.data })
        } catch (error) {
            console.dir(error)
            dispatch({ type: GET_USER_FAIL, payload: error });
        } 
        };