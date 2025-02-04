// import React, { useContext, useEffect, useState } from 'react'
// import Add from './Add'
// import Edit from './Edit'
// import { userProjectAPI } from '../services/allapi'
// import { addResponseContext } from '../../contexts/ContextsAPI'
// import { editResponseContext } from '../../contexts/ContextsAPI';





// function View() {

//   // 27jan2025
//   const{addResponse,setAddResponse}=useContext(addResponseContext)
//    const {editResponse,setEditResponse}=useContext({editResponseContext})

//   const [userProject,setUserProject]=useState([])
//   console.log(userProject);
  

//   useEffect(() => {
//     getUserProjects()
   
//   }, [addResponse,editResponse])
  

//   const getUserProjects=async()=>{
//     const token=sessionStorage.getItem("token")
//     if(token){
//       const reqHeader={
//         "content-type":"application/json",
//         "authorization":`Bearer ${token}`
//       }
//       try {
//         const result=await userProjectAPI(reqHeader)
//         console.log(result);
//         // if(result.status==200)
//         // {
//         //   setUserProject(result.data)
//         // }
        
        
//       } catch (err) {
//         console.log(err);
        
        
//       }
//     }
//   }

   
//   return (
//     <>
//       <div className='d-flex justify-content-between'>
//         <h3 className='text-warning'>All Project</h3>
//         <Add/>

//       </div>
//       <div className='mt-2'>
//         {
//            userProject?.length>0 ? 
//           userProject?.map(project=>(
//             <div style={{
//               display: 'flex',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//               border: '1px solid #ccc',
//               padding: '10px',
//               borderRadius: '5px',
//               marginBottom: '10px'
//             }}>
               
//               <div >
//                 <p style={{ margin: 0 }}>{project.title}</p>
               
//                 </div>
//               <div>
                
//                 <button className='btn'><Edit project={project} /></button>
//                <button className='btn'> <i className="fa-brands fa-square-github me-3"></i></button>
//                 <button className='btn'><i className="fa-solid fa-trash"></i></button>
//               </div>
//             </div>
//           )):
//   <div className='text-danger'>No project added yet</div>
//   }
//       </div>

   
//     </>
//   )
// }

// export default View

// import React, { useContext, useEffect, useState } from 'react'
// import Add from './Add'
// import Edit from './Edit'
// import { deleteProjectAPI, userProjectAPI } from '../services/allapi'
// import { addResponseContext } from '../../contexts/ContextsAPI'
// import { editResponseContext } from '../../contexts/ContextsAPI'


// function View() {
//   const { addResponse, setAddResponse } = useContext(addResponseContext)
//   const { editResponse, setEditResponse } = useContext(editResponseContext) 

//   const [userProject, setUserProject] = useState([])
//   console.log(userProject)

//   useEffect(() => {
//     getUserProjects()
//   }, [addResponse, editResponse])

//   const getUserProjects = async () => {
//     const token = sessionStorage.getItem("token")
//     if (token) {
//       const reqHeader = {
//         "content-type": "application/json",
//         "authorization": `Bearer ${token}`
//       }
//       try {
//         const result = await userProjectAPI(reqHeader)
//         console.log(result)
//         if (result.status === 200) {
//           setUserProject(result.data)
//         }
//       } catch (err) {
//         console.log(err)
//       }
//     }
//   }
//   const handleDeleteProject=async(pid)=>{

//     const token = sessionStorage.getItem("token")
//     if (token) {
//       const reqHeader = {
//         "content-type": "application/json",
//         "authorization": `Bearer ${token}`
//       }
//     try {

//       const result=await deleteProjectAPI(pid,reqHeader)
//       console.log(result);
      
      
//     } catch (err) {
//       console.log(err);
      
      
//     }

//   }

//   return (
//     <>
//       <div className='d-flex justify-content-between'>
//         <h3 className='text-warning'>All Project</h3>
//         <Add />
//       </div>
//       <div className='mt-2'>
//         {
//           userProject?.length > 0 ?
//             userProject.map(project => (
//               <div style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//                 border: '1px solid #ccc',
//                 padding: '10px',
//                 borderRadius: '5px',
//                 marginBottom: '10px'
//               }} key={project.id}> {/* Adding key here */}
//                 <div>
//                   <p style={{ margin: 0 }}>{project.title}</p>
//                 </div>
//                 <div>
//                   <button className='btn'><Edit project={project} /></button>
//                   <button className='btn'> <i className="fa-brands fa-square-github me-3"></i></button>
//                   <button onClick={()=>handleDeleteProject(project?._id)} className='btn'><i className="fa-solid fa-trash"></i></button>
//                 </div>
//               </div>
//             )) :
//             <div className='text-danger'>No project added yet</div>
//         }
//       </div>
//     </>
//   )
// }

// export default View
import React, { useContext, useEffect, useState } from 'react'
import Add from './Add'
import Edit from './Edit'
import { deleteProjectAPI, userProjectAPI } from '../services/allapi'
import { addResponseContext } from '../../contexts/ContextsAPI'
import { editResponseContext } from '../../contexts/ContextsAPI'

function View() {
  const { addResponse, setAddResponse } = useContext(addResponseContext)
  const { editResponse, setEditResponse } = useContext(editResponseContext)

  const [userProject, setUserProject] = useState([])

  useEffect(() => {
    getUserProjects()
  }, [addResponse, editResponse])

  const getUserProjects = async () => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "content-type": "application/json",
        "authorization": `Bearer ${token}`
      }
      try {
        const result = await userProjectAPI(reqHeader)
        if (result.status === 200) {
          setUserProject(result.data)
        }
      } catch (err) {
        console.log(err)
      }
    }
  }

  const handleDeleteProject = async (pid) => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "content-type": "application/json",
        "authorization": `Bearer ${token}`
      }
      try {
        const result = await deleteProjectAPI(pid, reqHeader)
        if (result.status === 200) {
          // Remove the deleted project from the state without fetching again
          // setUserProject(prevProjects => prevProjects.filter(project => project._id !== pid))
          getUserProjects()
        }
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <>
      <div className='d-flex justify-content-between'>
        <h3 className='text-warning'>All Project</h3>
        <Add />
      </div>
      <div className='mt-2'>
        {
          userProject?.length > 0 ?
            userProject.map(project => (
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                border: '1px solid #ccc',
                padding: '10px',
                borderRadius: '5px',
                marginBottom: '10px'
              }} key={project._id}> {/* Make sure the key is unique */}
                <div>
                  <p style={{ margin: 0 }}>{project.title}</p>
                </div>
                <div>
                  <button className='btn'><Edit project={project} /></button>
                  <button className='btn'> <i className="fa-brands fa-square-github me-3"></i></button>
                  <button onClick={() => handleDeleteProject(project._id)} className='btn'>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            )) :
            <div className='text-danger'>No project added yet</div>
        }
      </div>
    </>
  )
}

export default View
