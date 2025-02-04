import React, { useContext } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { authorizationContext } from '../../contexts/ContextsAPI'



function Header() {
  // dec31
   const {isAuthorized,setIsAuthorized}=useContext(authorizationContext)


  const navigate=useNavigate()
  // handlelogOut=()=>{
  //   sessionStorage.clear()
  //   navigate('/login')
  //   setIsAuthorized(false)
  // }
  const handlelogOut = () => {
    sessionStorage.clear();
    navigate('/login');
    setIsAuthorized(false);
  };
  
  return (
    <>
     {/* <Navbar className="bg-danger">
        <Container>
          <Link to={'/'} style={{textDecoration:'none'}}>
          <Navbar.Brand  style={{color:'white' }}>
          
           <i className="fa-brands fa-docker "></i> Project Fair
          </Navbar.Brand>
          <button type="button" class="btn btn-light" fdprocessedid="whqd0g">Light</button>
          </Link>
        </Container>
      </Navbar> */}
      
    <Navbar className="bg-danger">
      <Container>
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          <Navbar.Brand style={{ color: 'white' }}>
            <i className="fa-brands fa-docker"></i> Project Fair
          </Navbar.Brand>
        </Link>
        <div className="ms-auto ">
          <button onClick={handlelogOut} type="button" className="btn btn-light ">Log out</button>
        </div>
      </Container>
    </Navbar>
 
    
    </>
  )
}

export default Header