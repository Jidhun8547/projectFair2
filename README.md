# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


import React, { useState } from 'react'
import loginimg from '../assets/loginimg.png'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { registerApi } from '../Services/allAPI';




export default function Authentication({insideRegister}) {

  const [userDetails,setUserDeatails]=useState ({username:"",email:"",password:""})
  console.log(userDetails);

  const handleRegister=async()=>{

    if(userDetails.username && userDetails.email && userDetails.password){
      
      try{

        const result=await registerApi(userDetails)
        console.log(result);
        


      }
      catch(err){

        console.log(err);
        

      }

    }else{
      toast.warning("Enter the Field Completely...")
    }
  }
  
  return (
    <>

         <div style={{width:'100%',height:'100%'}}>
              <div className="container">
                <div className='card shadow p-2 mt-0 mt-sm-5 '>
                    <div className="row">
                      <div className="col-lg-6">
                        <img className='img-fluid' src={loginimg} alt="" />
                      </div>
                      <div className="col-lg-6 mt-5 p-3">
                        <h2 className='text-danger'><i class="fa-brands fa-dropbox"></i> Project Fair</h2>
                           {
                            insideRegister ?
                               <p className='text-warning fs-4'>Sign up to your account</p>
                               :
                               <p className='text-warning fs-4'>Log in to your account</p>
                            }
                           <div >
                           {
                            insideRegister &&
                            <FloatingLabel controlId="floatingInput" label="User Name" className="mb-3">
                            <Form.Control onChange={e=>setUserDeatails({...userDetails,username:e.target.value})} type="text" placeholder="Enter a User Name" />
                            </FloatingLabel>
                            }
                            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                            <Form.Control onChange={e=>setUserDeatails({...userDetails,email:e.target.value})} type="email" placeholder="name@example.com" />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingPassword" label="Password">
                            <Form.Control onChange={e=>setUserDeatails({...userDetails,password:e.target.value})} type="password" placeholder="Password" />
                            </FloatingLabel>
                          </div>
                        
                         { insideRegister ?
                          <div>
                                <button type='submit' onClick={handleRegister} className='btn btn-warning fs-5 w-100 mt-3' >Sign Up</button>
                                <p className='mt-2'>Already have an account ? <Link to={'/login'}>Login</Link></p>
                           </div> :
                           <div>
                           <button className='btn btn-warning fs-5 w-100 mt-3' >Login</button>
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
