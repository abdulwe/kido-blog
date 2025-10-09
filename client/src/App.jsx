import { BrowserRouter, Routes, Route } from 'react-router-dom';



import React from 'react';
import Home from './pages/Home';
import MeetFounder from './pages/MeetFounder';
import Project from './pages/Project';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';
import Signin from './pages/Signin';
import Header from './Components/Header';
import FooterComponent from './Components/Footer';

export default function App() {
  return (
 <BrowserRouter>
 <Header/>
 <Routes>
  <Route path='/' element={<Home/>}/>
   <Route path='/MeetFounder' element={<MeetFounder/>}/>
    <Route path='/Project' element={<Project/>}/>
     <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
       <Route path='/Signin' element={<Signin/>}/>
 </Routes>
 <FooterComponent/>
 
 </BrowserRouter>
  )
}
