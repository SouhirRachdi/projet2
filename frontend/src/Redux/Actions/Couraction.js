import axios from "axios";
import {LOAD_COURS,
    ADD_COURS_SUCCESS,
    ADD_COURS_FAIL,
    GET_COUR_SUCCESS,
    GET_COUR_FAIL,
    GET_ALL_COURS_SUCCESS,
    GET_ALL_COURS_FAIL,
    DELETE_COURS_SUCCESS,
    DELETE_COURS_FAIL,
    EDIT_COURS_SUCCESS,
    EDIT_COURS_FAIL
  }
    from "../ActionsTypes/CourConstant" 


export const addCour = (newCour, navigate) => async (dispatch) => {
    try {
      const opts = {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      };
      console.log(newCour.get("file"))
      const response = await axios.post(
        "http://localhost:5000/cour/addCour",
        newCour,opts
      );
      console.log(response);
      dispatch({ type: ADD_COURS_SUCCESS,payload:response.data });
      navigate("/cours");
    } catch (error) {
      console.dir(error);
      dispatch({ type: ADD_COURS_FAIL, payload: error });
    }
  };
  export const getAllcourses = () => async (dispatch) => {
    dispatch({ type: LOAD_COURS });
    try {
      const opts = {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      };
      const response = await axios.get("http://localhost:5000/cour/courses",opts);
      dispatch({ type: GET_ALL_COURS_SUCCESS, payload: response.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_ALL_COURS_FAIL, payload: error });
    }
  };
  export const deleteCour = (idCour,navigate) => async (dispatch) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/cour/${idCour}`
      );
      dispatch({ type: DELETE_COURS_SUCCESS });
      dispatch(getAllcourses());
      navigate("/cours");
    } catch (error) {
      console.dir(error);
      dispatch({ type: DELETE_COURS_FAIL, payload: error });
    }
  };
  export const editCour = (courEdit,idCour,navigate) => async dispatch => {
    try {
      const response = await axios.put(`http://localhost:5000/cour/${idCour}`,courEdit);
      console.log(response)
      dispatch({ type: EDIT_COURS_SUCCESS });
      dispatch(getAllcourses());
      navigate("/cour")
    } catch (error) {
      console.dir(error);
      dispatch({ type: EDIT_COURS_FAIL, payload: error });
    }
  };
  export const getOneCour = (idCour) => async (dispatch) => {
    dispatch({ type: LOAD_COURS});

    try {
      const response = await axios.get(
        `http://localhost:5000/cour/${idCour}`
      );
      dispatch({ type: GET_COUR_SUCCESS, payload: response.data });
    } catch (err) {
      console.dir(err);
      dispatch({ type: GET_COUR_FAIL, payload: err });
    }
  };