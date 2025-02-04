import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom'; 
import {loginApi, registerAPI} from '../services/allapi'
import Spinner from 'react-bootstrap/Spinner';
import { authorizationContext } from '../../contexts/ContextsAPI';





// import loginimg from './assets/loginimg.png'



function Auth({insideregister}) {

  // dec31
  const {isAuthorized,setIsAuthorized}=useContext(authorizationContext)

  const [userDetails,setuserDetails]=useState({username:"",email:"",password:""})
  console.log(userDetails);
  const [isLogin,setIsLogin]=useState(false)
  
    const Navigate=useNavigate()

  const handleregister=async()=>{
    if(userDetails.username&&userDetails.email&&userDetails.password){
  try{
    const result=await registerAPI(userDetails)
    // error :axios error;msg n/w error
    console.log(result);
    if(result.status=200){
      setuserDetails({username:"",email:"",password:""})
      Navigate('/login')

    }
    else{
      if(result.status==406){
        toast.warning(result.response.data)
        setuserDetails({username:"",email:"",password:""})
      }
    }

    

  }
  catch(err){
    console.log(err);
    
  }
      

    }
    else{
     
     toast.warning("enter the field completely")
    }
  }

   const handleSignin=async()=>{
    if(userDetails.email&&userDetails.password){
      // api call
      try {
        const result=await loginApi(userDetails)
        console.log(result);
        if(result.status==200){
          // dec31
          setIsAuthorized(true)

          sessionStorage.setItem("user",JSON.stringify(result.data.user))
          sessionStorage.setItem("token",result.data.token)
          setIsLogin(true)
          setTimeout(() => {
            setuserDetails({username:"",email:"",password:""})
          Navigate('/')
          setIsLogin(false)
            
          }, 2000);
        }
        else{
          if(result.status==404){
            toast.error(result.response.data)
          }
        }
        
      } catch (err) {
        console.log(err);
        
        
      }
    }else{
      toast.warning("enter the field completely")
    }

   }
  return (
    <>
    
    <div style={{width:'100%',height:'100%'}}>
              <div className="container">
                <div className='card shadow p-2 mt-0 mt-sm-5 '>
                    <div className="row">
                      <div className="col-lg-6">
                        <img className='img-fluid' src="https://i.pinimg.com/originals/d1/54/66/d154660a6ae3104de2b0a314667a5ab6.png" alt="" />
                      </div>
                      <div className="col-lg-6 mt-5 p-3">
                        <h2 className='text-danger'><i class="fa-brands fa-dropbox"></i> Project Fair</h2>
                           {
                            insideregister ?
                               <p className='text-warning fs-4'>Sign up to your account</p>
                               :
                               <p className='text-warning fs-4'>Log in to your account</p>
                            }
                           <div >
                           {
                            insideregister &&
                            <FloatingLabel controlId="floatingInput" label="User Name" className="mb-3">
                            <Form.Control onChange={(e)=>{setuserDetails({...userDetails,username:e.target.value})}} type="text" value ={userDetails.username} placeholder="Enter a User Name" />
                            </FloatingLabel>
                            }
                            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                            <Form.Control onChange={(e) => setuserDetails({...userDetails, email: e.target.value})} type="email" placeholder="name@example.com" value ={userDetails.email}/>
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingPassword" label="Password">
                            <Form.Control onChange={(e) => setuserDetails({...userDetails, password: e.target.value})} type="password" placeholder="Password"  />
                            </FloatingLabel>
                          </div>
                        
                         { insideregister ?
                          <div>
                                <button type='submit' onClick={handleregister} className='btn btn-warning fs-5 w-100 mt-3' >Sign Up</button>
                                <p className='mt-2'>Already have an account ? <Link to={'/login'}>Login</Link></p>
                           </div> :
                           <div>
                           <button onClick={handleSignin} className='btn btn-warning fs-5 w-100 mt-3' >Sign in  {isLogin&&
                            <Spinner  variant="light" />}</button>
                           <p className='mt-2'>Don't have an account yet? <Link to={'/register'}>Register</Link></p>
                           </div>
                           }

                      </div>
                    </div>
                </div>
              </div>
         </div>
      
    </>
   
  )
}

export default Auth