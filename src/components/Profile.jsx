
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
// import { ServerRouter } from 'react-router-dom';
import SERVER_URL from '../services/service-url';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import { ediProfileAPI } from '../services/allapi';



function Profile() {
  const [open, setOpen] = useState(false);

  const[userDetails,setUserDetails]=useState({username:"",email:"",password:"",github:"",linkedin:"",profile:""})

  const [preview,setPreview]=useState("")
  const [excistingImg,setExcistingImg]=useState("")

  useEffect(() => {
   if(userDetails.profile){
    setPreview(URL.createObjectURL(userDetails.profile))
   }
   else{
    setPreview("")
   }
  }, [userDetails.profile])
  

  useEffect(() => {
    
  if(sessionStorage.getItem("user")){
    const existingUser=JSON.parse(sessionStorage.getItem("user"))
    setUserDetails({...userDetails,username:existingUser?.username,email:existingUser?.email,password:existingUser?.password,github:existingUser?.github,linkedin:existingUser?.linkedin})
    setExcistingImg(existingUser?.profile)
  }
   
  }, [open])

  const handleUpdate=async()=>{

    const{ username,email,password,github,linkedin,profile}=userDetails

    if(github&&linkedin){

      const reqBody= new FormData()

      reqBody.append("username",username)
      reqBody.append("email",email)
      reqBody.append("password",password)
      reqBody.append("github",github)
      reqBody.append("linkedin",linkedin)
      preview?reqBody.append("profile",profile):reqBody.append("profile",excistingImg)
     
      const token=sessionStorage.getItem("token")

      // req header
      if(token){

        const reqHeader={
          "content-type": preview? "multipart/form-data":"Application/json",
          "authorization":`Baerer ${token}`
        }
        try {

          const result=await ediProfileAPI(reqBody,reqHeader)
         console.log(result);

         if(result.status==200){
          setOpen(!open)
          sessionStorage.setItem("user",JSON.stringify(result.data))


         }
         
          
        } catch (err) {

          console.log(err);
          
          
        }
      }
      

    }
    else{
      toast.warning("please fill the field completely")
    }
  }
  
  return (
    <><Button  className='btn'style={{ background: "transparent", border: "none", boxShadow: "none" }}
    onClick={() => setOpen(!open)}
    aria-controls="example-collapse-text"
    aria-expanded={open}
  >
   <i className="fa-solid fa-angle-down  fa-2x"></i>
  </Button>
    {/* collapse */}
    <Collapse in={open} dimension="width">
    
          <div id="example-collapse-text">
          <Card style={{ width: '18rem' }}>
        {   
        excistingImg==""?
          
          <Card.Img variant="top" src="https://www.shutterstock.com/image-vector/people-illustrations-profile-examples-260nw-1270121050.jpg" alt="Placeholder image" />:
          <Card.Img variant="top" src={`${SERVER_URL}/uploads/${excistingImg}`} alt="Placeholder image" />
            
          }
        <Card.Body>
          
          <FloatingLabel controlId="floatingInput" label="Github link" className="mb-3">
            <Form.Control type="text" value={userDetails?.github} onChange={(e)=>setUserDetails({...userDetails,github:e.target.value})} placeholder="Github link" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Linkedin Link" className="mb-3">
            <Form.Control type="text" value={userDetails?.linkedin} onChange={(e)=>setUserDetails({...userDetails,linkedin:e.target.value})} placeholder="Linkedin Link" />
          </FloatingLabel>
         

          <div>
            <button onClick={ handleUpdate}  className='btn btn-danger w-100'>update Profile</button>
          </div>
        </Card.Body>
      </Card>

          </div>
        </Collapse>
      
    </>
  );
}

export default Profile;

