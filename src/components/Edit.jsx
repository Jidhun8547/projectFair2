// import React from 'react'
// import React, { useEffect, useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
// import Form from 'react-bootstrap/Form';
// // import { toast } from 'react-toastify';
// // import { addProjectAPI } from '../services/allapi';
// // import { addResponseContext } from '../../contexts/ContextsAPI';
// import SERVER_URL from '../services/service-url';
// import { toast } from 'react-toastify';



// function Edit({project}) {
//   const [projectDetails, setProjectDetails] = useState({
//       title:project?.title,
//       languages: project?.languages,
//       github: project?.github,
//       website: project?.website,
//       overview:project?.overview,
//       projectImg: ""
//     });
//      const [imgFileStatus, setImgFileStatus] = useState(false);
//   const [preview,setPreview]=useState("")
//   const [show, setShow] = useState(false);

//     useEffect(() => {
//       // if (projectDetails.projectImg.type=="image/png"||projectDetails.projectImg.type=="image/jpg"||projectDetails.projectImg.type=="image/jpeg")
      
//       if (projectDetails.projectImg && 
//         (projectDetails.projectImg.type === "image/png" || 
//          projectDetails.projectImg.type === "image/jpg" || 
//          projectDetails.projectImg.type === "image/jpeg")) 
    
//       {
//         setImgFileStatus(true)
//         // temperary url convertion
//         setPreview(URL.createObjectURL(projectDetails.projectImg))
  
//       }
//       else{
//         setPreview("https://cdn.icon-icons.com/icons2/607/PNG/512/images-interface-symbol_icon-icons.com_56287.png")
//         setImgFileStatus(false)
//         setProjectDetails({...projectDetails,projectImg:""})
//       }
//      }, [projectDetails.projectImg])
  
//     const handleClose = () =>{
//       setShow(false)
//       setProjectDetails({
//         title:project?.title,
//         languages: project?.languages,
//         github: project?.github,
//         website: project?.website,
//         overview:project?.overview,
//         projectImg: ""
//       })
//     }
     
//     const handleShow=()=>setShow(true);
//     handleUpdate=()=>{
//       const {title,languages,github,website,overview}=projectDetails
//       if(title&&languages&&github&&website&&overview){
//         // api call

//       }
//       else{
//         toast.warning("please fill the field completely")
//       }
//     }
//   return (
//     <>
    
//     <div>
//     <button onClick={handleShow} className='btn fw-border'><i className="fa-regular fa-pen-to-square me-3"></i></button>

//     <Modal size='lg' show={show} onHide={handleClose}>
//           <Modal.Header closeButton>
//             <Modal.Title>update Project Details</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <div className='row'>
//               <div className='col-lg-4'>
//                 <label>
//                   <input
//                     type="file" 
//                     onChange={(e) => setProjectDetails({ ...projectDetails, projectImg: e.target.files[0] }) } style={{ display: 'none' }} 
//                   />
//                   <img style={{ objectFit: 'contain' }} src={`${SERVER_URL}/uploads/${ project?.projectImg}`} width={'150px'} alt="" />
//                 </label>
//                 {!imgFileStatus &&
//                   <div className='fw-bold text-warning mt-2'>
//                     <p>*only upload following file types (.png, .jpg, .jpeg)</p>
//                   </div>
//                 }
//               </div>
//               <div className='col-lg-8'>
//                 <FloatingLabel controlId="floatingInputTitle" label="Project Title" className="mb-3">
//                   <Form.Control
//                     type="text"
//                     onChange={(e) => setProjectDetails({ ...projectDetails, title: e.target.value })} value={projectDetails?.title}
//                     placeholder="Enter Project Title"
//                   />
//                 </FloatingLabel>
//                 <FloatingLabel controlId="floatingInputLanguages" label="Languages" className="mb-3">
//                   <Form.Control
//                     type="text"
//                     onChange={(e) => setProjectDetails({ ...projectDetails, languages: e.target.value })} value={projectDetails?.languages}
//                     placeholder="Enter Languages"
//                   />
//                 </FloatingLabel>
//                 <FloatingLabel controlId="floatingInputGithub" label="GitHub URL" className="mb-3">
//                   <Form.Control
//                     type="text"
//                     onChange={(e) => setProjectDetails({ ...projectDetails, github: e.target.value })}value={projectDetails?.github}
//                     placeholder="Enter GitHub URL"
//                   />
//                 </FloatingLabel>
//                 <FloatingLabel controlId="floatingInputWebsite" label="Website URL" className="mb-3">
//                   <Form.Control
//                     type="text"
//                     onChange={(e) => setProjectDetails({ ...projectDetails, website: e.target.value })}value={projectDetails?.website}
//                     placeholder="Enter Website URL"
//                   />
//                 </FloatingLabel>
//                 <FloatingLabel controlId="floatingInputOverview" label="Project Overview" className="mb-3">
//                   <Form.Control
//                     type="text"
//                     onChange={(e) => setProjectDetails({ ...projectDetails, overview: e.target.value })}value={projectDetails?.overview}
//                     placeholder="Enter Project Overview"
//                   />
//                 </FloatingLabel>
//               </div>
//             </div>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Cancel
//             </Button>
//             <Button onClick={handleUpdate} variant="primary" >
//               Update
//             </Button>
//           </Modal.Footer>
//         </Modal>



    
    
    
//     </div>
    
//     </>
   
//   )
// }

// export default Edit
import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import SERVER_URL from '../services/service-url';
import { editProjectAPI } from '../services/allapi';
import { editResponseContext } from '../../contexts/ContextsAPI';





function Edit({ project }) {

   const {editResponse,setEditResponse}=useContext(editResponseContext)
 
  const [projectDetails, setProjectDetails] = useState({
    id:project?._id,
    title: project?.title,
    languages: project?.languages,
    github: project?.github,
    website: project?.website,
    overview: project?.overview,
    projectImg: ""
  });

  const [imgFileStatus, setImgFileStatus] = useState(false);
  const [preview, setPreview] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (
      projectDetails.projectImg &&
      (projectDetails.projectImg.type === "image/png" ||
        projectDetails.projectImg.type === "image/jpg" ||
        projectDetails.projectImg.type === "image/jpeg")
    ) {
      setImgFileStatus(true);
      // temporary URL conversion
      setPreview(URL.createObjectURL(projectDetails.projectImg));
    } else {
      setPreview("https://cdn.icon-icons.com/icons2/607/PNG/512/images-interface-symbol_icon-icons.com_56287.png");
      setImgFileStatus(false);
      setProjectDetails({ ...projectDetails, projectImg: "" });
    }
  }, [projectDetails.projectImg]);

  const handleClose = () => {
    setShow(false);
    setProjectDetails({id:project?._id,
      title: project?.title,
      languages: project?.languages,
      github: project?.github,
      website: project?.website,
      overview: project?.overview,
      projectImg: ""
    });
  };

  const handleShow = () => {
    setShow(true);
    setProjectDetails({id:project?._id,
      title: project?.title,
      languages: project?.languages,
      github: project?.github,
      website: project?.website,
      overview: project?.overview,
      projectImg: ""
    });
  }

  const handleUpdate = async() => {
    const { id,title, languages, github, website, overview ,projectImg} = projectDetails;
    if (title && languages && github && website && overview) {
      // API call 
      const reqBody=new FormData()
      reqBody.append("title",title)
      reqBody.append("languages",languages)
      reqBody.append(" github", github)
      reqBody.append("website",website)
      reqBody.append("overview",overview)
      preview? reqBody.append("projectImg", projectImg):reqBody.append("projectImg",project?.projectImg)

      const token=sessionStorage.getItem("token")
      if(token){
        const reqHeader={
          "content-type":preview?"multipart/form-data":"application/json",
          "authorization":`Bearer ${token}`
        }

        try {

          const result = await editProjectAPI(id,reqBody,reqHeader)
                   console.log(result);
                   if(result.status==200){
                    
                    setEditResponse(result.data)
                    handleClose()
                   }
         
          
          
        } catch (err) {
          console.log(err);
          
          
        }

        


      }
      
    } else {
      toast.warning("Please fill the fields completely.");
    }
  };

  return (
    <>
      <div>
        <button onClick={handleShow} className="btn fw-border">
          <i className="fa-regular fa-pen-to-square me-3"></i>
        </button>

        <Modal size="lg" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Project Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-4">
                <label>
                  <input
                    type="file"
                    onChange={(e) =>
                      setProjectDetails({ ...projectDetails, projectImg: e.target.files[0] })
                    }
                    style={{ display: 'none' }}
                  />
                  <img
                    style={{ objectFit: 'contain' }}
                    src={projectDetails.projectImg ? preview : `${SERVER_URL}/uploads/${project?.projectImg}`}
                    width={'150px'}
                    alt="Project Thumbnail"
                  />
                </label>
                {!imgFileStatus && (
                  <div className="fw-bold text-warning mt-2">
                    <p>*Only upload following file types (.png, .jpg, .jpeg)</p>
                  </div>
                )}
              </div>
              <div className="col-lg-8">
                <FloatingLabel controlId="floatingInputTitle" label="Project Title" className="mb-3">
                  <Form.Control
                    type="text"
                    onChange={(e) => setProjectDetails({ ...projectDetails, title: e.target.value })}
                    value={projectDetails?.title}
                    placeholder="Enter Project Title"
                  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInputLanguages" label="Languages" className="mb-3">
                  <Form.Control
                    type="text"
                    onChange={(e) => setProjectDetails({ ...projectDetails, languages: e.target.value })}
                    value={projectDetails?.languages}
                    placeholder="Enter Languages"
                  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInputGithub" label="GitHub URL" className="mb-3">
                  <Form.Control
                    type="text"
                    onChange={(e) => setProjectDetails({ ...projectDetails, github: e.target.value })}
                    value={projectDetails?.github}
                    placeholder="Enter GitHub URL"
                  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInputWebsite" label="Website URL" className="mb-3">
                  <Form.Control
                    type="text"
                    onChange={(e) => setProjectDetails({ ...projectDetails, website: e.target.value })}
                    value={projectDetails?.website}
                    placeholder="Enter Website URL"
                  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInputOverview" label="Project Overview" className="mb-3">
                  <Form.Control
                    type="text"
                    onChange={(e) => setProjectDetails({ ...projectDetails, overview: e.target.value })}
                    value={projectDetails?.overview}
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
            <Button onClick={handleUpdate} variant="primary">
              Update
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default Edit;
