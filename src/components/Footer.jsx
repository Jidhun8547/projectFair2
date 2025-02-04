import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
    
    <div className=' w-100 p-3'>
      <div style={{height:'350px '}} className='container mt-5' >
        <div className='d-flex justify-content-between flex-wrap w-100'>
          <div style={{width:'400px'}}>
          <h3>
          <i className="fa-brands fa-docker"></i> &nbsp; fasion store
          </h3>
          <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio a nisi error, minus eligendi similique eos illo molestiae! Natus aliquam repellat consectetur cumque corrupti commodi, voluptas aspernatur qui enim officiis!</p>
          <p className='text-white'>Code is lisenced by luminar</p>
          <p className='text-white'>currently v5.3.5</p>
  
          </div>
          <div className='d-flex flex-column'>
            <h5>Links</h5>
            <Link to={'/'} style={{textDecoration:'none', color:'white'}}>Home</Link>
            <Link to={'/login'} style={{textDecoration:'none', color:'white'}}>Login</Link>
            <Link to={'/register'} style={{textDecoration:'none', color:'white'}}>Register</Link>
  
          </div>
  
          <div className='d-flex flex-column'>
            <h5>Guids</h5>
            <Link to={''} style={{textDecoration:'none', color:'white'}}>React</Link>
            <Link to={''} style={{textDecoration:'none', color:'white'}}>Reacr Bootstrap</Link>
            <Link to={''} style={{textDecoration:'none', color:'white'}}>React Router</Link>
  
          </div>
  
          <div className='d-flex flex-column'>
            <h5>Send Feedback</h5>
            <div className='d-flex'>
              <input type="text" className='form-control' placeholder='Enter feedback' />
              <button className='btn btn-success ms-2'><i class="fa-solid fa-arrow-right"></i></button>
  
            </div>
            <div className='d-flex justify-content-between mt-3'>
              <a href="" className='text-dark fs-5'> <i class="fa-brands fa-facebook"></i></a>
              <a href="" className='text-dark fs-5'> <i class="fa-brands fa-twitter"></i></a>
              <a href="" className='text-dark fs-5'> <i class="fa-brands fa-instagram"></i></a>
              <a href="" className='text-dark fs-5'> <i class="fa-brands fa-linkedin"></i></a>
              <a href="" className='text-dark fs-5'> <i class="fa-brands fa-github"></i></a>
              <a href="" className='text-dark fs-5'> <i class="fa-solid fa-phone"></i></a>
  
  
  
  
            </div>
            
  
          </div>
  
        </div>
        <p className='text-center mt-4 fw-bold text-dark '>Copyright © Aug batch 2025,Project Fair. Built with React</p>
      </div>
    </div>
    
    </>
   
  )
}

export default Footer