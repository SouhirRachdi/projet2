
import './App.css';
import NavBar from "./Components/NavBar";
import SignIn from './Components/SignIn';
import {Routes,Route} from "react-router-dom";
import SignUp from './Components/SignUp';
import Profil from './Components/Profil/Profil';
import { getAllStudent, getUser } from './Redux/Actions/Useraction';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Dashboard from './Components/dashboard/dashboard'
import PrivateRoute from './Components/privateRoutes/PrivateRoutes';
import Calendar from './Components/Calendar';
import Cours from './Components/Cours/Cours';
import AddCours from './Components/Cours/AddCours';
import AuthProf from './Components/AuthProf';
import  { Pdf } from './Components/Pdf';
import Orders from './Components/StudentList';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { getAllcourses, getOneCour } from './Redux/Actions/Couraction';
import Test from './Components/courPdf';
import Cour from './Components/Cours/Cour';
import EditCour from './Components/Cours/EditCour';
import { useState } from 'react';
import { getAllVideos } from './Redux/Actions/Libraryaction';
import LibraryList from './Components/library/LibraryList';
import AddLab from './Components/library/AddLab';
import PostList from './Components/post/PostList';
import CommentSection from './Components/post/CommentSection';
import AddPost from './Components/post/AddPost';
import { getPosts } from './Redux/Actions/postaction';



function App() {
  const dispatch=useDispatch()
useEffect(() => {
  dispatch(getUser())
  dispatch(getAllStudent());
  dispatch(getAllcourses());
  dispatch(getAllVideos());
  dispatch(getPosts());
  
}, [])
const [search,setSearch]=useState("");
const HandleFiltre=(text)=>{
  setSearch(text);
}

  return (
    <div className="App">

     <Routes>
     <Route path="/signup" element={<SignUp/>}/>
     <Route  path="/" element={<SignIn/>}/>
     <Route  path="/dashboard" element={<PrivateRoute><NavBar HandleFiltre={HandleFiltre}/><Dashboard /></PrivateRoute>}/>
     <Route  path="/calendar" element={<PrivateRoute><NavBar HandleFiltre={HandleFiltre}/><Calendar /></PrivateRoute>}/>
     <Route path="/profil" element={<PrivateRoute><NavBar HandleFiltre={HandleFiltre}/><Profil/></PrivateRoute>}/>
     <Route  path="/cours" element={<PrivateRoute><NavBar HandleFiltre={HandleFiltre}/><Cours search={search}/></PrivateRoute>}/>
     
     <Route  path="/library" element={<PrivateRoute><NavBar HandleFiltre={HandleFiltre}/><LibraryList/></PrivateRoute>}/>
     <Route path="/addtolab" element={<PrivateRoute><NavBar HandleFiltre={HandleFiltre}/><AddLab/></PrivateRoute>}/>
     <Route  path="/posts" element={<div><NavBar HandleFiltre={HandleFiltre}/><PostList/> </div>}/>
     <Route path="/postDetails/:id"  element={<PrivateRoute><NavBar HandleFiltre={HandleFiltre}/><CommentSection/></PrivateRoute>}/>
     <Route path="/addPost" element={<PrivateRoute><NavBar HandleFiltre={HandleFiltre}/><AddPost/></PrivateRoute>}/>
     <Route  path="/student" element={<PrivateRoute><NavBar HandleFiltre={HandleFiltre}/><Grid item xs={12}>
     <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
       <Orders />
     </Paper>
   </Grid></PrivateRoute>}/>
     <Route path="/addCour" element={<PrivateRoute><NavBar HandleFiltre={HandleFiltre}/><AddCours/></PrivateRoute>}/>
     <Route path="/courDetails/:id"  element={<PrivateRoute><NavBar HandleFiltre={HandleFiltre}/><Cour /></PrivateRoute>}/>
     <Route path="/editCour/:id" element={<PrivateRoute><NavBar HandleFiltre={HandleFiltre}/><EditCour /></PrivateRoute>} />
     </Routes>
    </div>
  );
}

export default App;
