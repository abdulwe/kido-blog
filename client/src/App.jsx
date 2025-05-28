import { BrowserRouter, Routes, Route } from 'react-router-dom';



import React from 'react';
import Home from './pages/Home';
import MeetFounder from './pages/MeetFounder';
import Market from './pages/Market';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';
import Signin from './pages/Signin';
import Header from './Components/Header';

export default function App() {
  return (
 <BrowserRouter>
 <Header/>
 <Routes>
  <Route path='/' element={<Home/>}/>
   <Route path='/MeetFounder' element={<MeetFounder/>}/>
    <Route path='/Market' element={<Market/>}/>
     <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
       <Route path='/Signin' element={<Signin/>}/>
 </Routes>
 
 </BrowserRouter>
  )
}
