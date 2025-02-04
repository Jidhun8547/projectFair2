
import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addProjectAPI } from '../services/allapi';
import { addResponseContext } from '../../contexts/ContextsAPI';





function Add() {

  const{addResponse,setAddResponse}=useContext(addResponseContext)
  const [projectDetails, setProjectDetails] = useState({
    title: "",
    languages: "",
    github: "",
    website: "",
    overview: "",
    projectImg: ""
  });
  const [imgFileStatus, setImgFileStatus] = useState(false);
  // state for url store
  const [preview,setPreview]=useState("")
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
    // empty modal after close
    setProjectDetails({ title: "",
      languages: "",
      github: "",
      website: "",
      overview: "",
      projectImg: ""})
  
  };
  const handleShow = () => setShow(true);
   useEffect(() => {
    // if (projectDetails.projectImg.type=="image/png"||projectDetails.projectImg.type=="image/jpg"||projectDetails.projectImg.type=="image/jpeg")
    
    if (projectDetails.projectImg && 
      (projectDetails.projectImg.type === "image/png" || 
       projectDetails.projectImg.type === "image/jpg" || 
       projectDetails.projectImg.type === "image/jpeg")) 
  
    {
      setImgFileStatus(true)
      // temperary url convertion
      setPreview(URL.createObjectURL(projectDetails.projectImg))

    }
    else{
      setPreview("https://cdn.icon-icons.com/icons2/607/PNG/512/images-interface-symbol_icon-icons.com_56287.png")
      setImgFileStatus(false)
      setProjectDetails({...projectDetails,projectImg:""})
    }
   }, [projectDetails.projectImg])
   

// add new project details 
const handleUpload=async()=>{
  const { title,languages,github,website,overview,projectImg}=projectDetails
      if(title&&languages&&github&&website&&overview&&projectImg){
        // api call
        // req body 
        
        const reqBody=new FormData()
        reqBody.append("title",title)
        reqBody.append("languages",languages)
        reqBody.append("github",github)
        reqBody.append("website",website)
        reqBody.append("overview",overview)
        reqBody.append("projectImg",projectImg)

       // req head
       const token=sessionStorage.getItem("token")
       if(token){
        const reqHeader={
          "Content-Type":"multipart/form-data",
          "authorization":`Bearer ${token}`
        }

        try {
          const result=await addProjectAPI(reqBody,reqHeader)
          // console.log(result);

          // to close modal
          if(result.status==200){
            handleClose()
            setAddResponse(result.data)
          }
          
        } catch (err) {
          console.log(err);
          
          
        }

       }

      }
      else{
        // toast
        toast.warning("enter the field completey")

      }

}

  return (
    <>
      <div className='m-1'>
        <button type="button" className="btn btn-primary" onClick={handleShow}>
          + New Project
        </button>

        <Modal size='lg' show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>New Project Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='row'>
              <div className='col-lg-4'>
                <label>
                  <input
                    type="file" 
                    onChange={(e) => setProjectDetails({ ...projectDetails, projectImg: e.target.files[0] }) } style={{ display: 'none' }} 
                  />
                  <img style={{ objectFit: 'contain' }} src={preview} width={'150px'} alt="" />
                </label>
                {!imgFileStatus &&
                  <div className='fw-bold text-warning mt-2'>
                    <p>*only upload following file types (.png, .jpg, .jpeg)</p>
                  </div>
                }
              </div>
              <div className='col-lg-8'>
                <FloatingLabel controlId="floatingInputTitle" label="Project Title" className="mb-3">
                  <Form.Control
                    type="text"
                    onChange={(e) => setProjectDetails({ ...projectDetails, title: e.target.value })}
                    placeholder="Enter Project Title"
                  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInputLanguages" label="Languages" className="mb-3">
                  <Form.Control
                    type="text"
                    onChange={(e) => setProjectDetails({ ...projectDetails, languages: e.target.value })}
                    placeholder="Enter Languages"
                  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInputGithub" label="GitHub URL" className="mb-3">
                  <Form.Control
                    type="text"
                    onChange={(e) => setProjectDetails({ ...projectDetails, github: e.target.value })}
                    placeholder="Enter GitHub URL"
                  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInputWebsite" label="Website URL" className="mb-3">
                  <Form.Control
                    type="text"
                    onChange={(e) => setProjectDetails({ ...projectDetails, website: e.target.value })}
                    placeholder="Enter Website URL"
                  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInputOverview" label="Project Overview" className="mb-3">
                  <Form.Control
                    type="text"
                    onChange={(e) => setProjectDetails({ ...projectDetails, overview: e.target.value })}
                    placeholder="Enter Project Overview"
                  />
                </FloatingLabel>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleUpload}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default Add;
