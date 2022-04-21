import React from 'react';
import { Navigate } from 'react-router-dom';
import {useSelector} from "react-redux"
const AuthProf = ({children}) => {
    const currentUser=useSelector(state=>state.userReducer.currentUser)
    const loading=useSelector(state=>state.userReducer.currentUser)
  return !currentUser?<div>loding...</div>:currentUser&&currentUser.role=="prof"?children:<Navigate to="/login"/>;
};

export default AuthProf;