import axios from "axios";
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

export const addVideo = (newVideo, navigate) => async (dispatch) => {
    try {
      const opts = {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      };
     //console.log(newVideo.get("file"))
      const response = await axios.post(
        "http://localhost:5000/library/addvideo",
        newVideo,opts
      );
      
      dispatch({ type: CREATE_LIBRARY_SUCCESS,payload:response.data   });
      navigate("/library");
    } catch (error) {
      console.dir(error);
      dispatch({ type: CREATE_LIBRARY_FAIL, payload: error });
    }
  };
  export const getAllVideos = () => async (dispatch) => {
    dispatch({ type: LOAD_LIBRARY });
    try {
      const opts = {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      };
      const response= await axios.get("http://localhost:5000/library/library",opts );
      dispatch({ type: GET_ALL_LIBRARY, payload: response.data })
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_ALL_LIBRARY_FAIL, payload: error });
    }
  };