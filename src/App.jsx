import React, { useContext, useState } from 'react'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import Project from './pages/Project'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'
import { authorizationContext } from '../contexts/ContextsAPI'










function App() {

  // dec31
   const {isAuthorized,setIsAuthorized}=useContext(authorizationContext)

  
  
  return (
    <>
    <ToastContainer
position="top-right"
autoClose={5000}

theme="light"

/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Auth/>}/>
     
      <Route path ='/register' element={<Auth insideregister={true}/>}/> 
      <Route path='/dashboard' element={isAuthorized?<Dashboard/>:<Navigate to={'/login'}/>}/>
      <Route path='/projects' element={isAuthorized?<Project/>:<Navigate to={'/login'}/>}/>
    </Routes>

    <Footer/>
    

    
    </>

  )
}

export default App