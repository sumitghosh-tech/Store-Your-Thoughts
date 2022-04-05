import React from 'react';
import {Container} from '@material-ui/core';
import { BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Auth from './components/Auth/Auth';
import { PostDetails } from './components/PostDetails/PostDetails';

const App = () =>{ 
  const user=JSON.parse(localStorage.getItem("profile"));

  return(
    <Router>
      <Container maxWidth="lg">
      <Navbar />
        <Routes>
          {/* <Route path='/'  element={<Navigate to="/posts"  replace={true}  />}/>             */}
          {/* <Route path='/' exact  element={<Home />}/>       */}
          {/* <Route path='/posts/search' exact  element={<Home />}/>       */}
          <Route path='/' exact  element={<Home />}/>      
          <Route path='/posts/:id' exact  element={<PostDetails />}/>      
          <Route path='/auth' exact  element={(!user ? <Auth/> : <Navigate to="/posts" replace={true}/>)}/>      
          {/* <Route path='/auth' exact  element={<Auth/>}/> */}
        </Routes>
        
        
      </Container>
    </Router>
        

  )};
  

export default App;


//<Route path='/' exact element={<Home />}/> it means when / is routed, then Home  is shown  / can be routed be clicking Memories button of Navbar component
//<Route path='/auth' exact  element={<Auth />}/> it means when /auth is routed, then Auth is shown  /auth can be routed be clicking Memories button of Navbar component