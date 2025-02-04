import React, { useEffect, useState } from 'react'
import Projectcard from '../components/Projectcard'
import { allProjectAPI } from '../services/allapi'




function Project() {
  const [allProjects,setAllProjects]=useState([])
  const[searchkey,setSearchkey]=useState("")
  console.log(searchkey);
  

  useEffect(() => {
    
  getAllProjects()
   
  }, [searchkey])
  
      const getAllProjects=async()=>{
    const token=sessionStorage.getItem("token")
    if(token){
     const reqHeader={
       "Content-Type":"application/json",
       "authorization":`Bearer ${token}`
     }
     try {
      const result=await allProjectAPI(searchkey,reqHeader)
      console.log(result);
      if(result.status==200){
        setAllProjects(result.data)
      }
      
      
     } catch (err) {

      console.log(err);
      
      
     }
    }

  }
  return (
    <>
    <div className='container mt-5'>
      <div className='d-flex justify-content-between'>
        <h3>All project</h3>
        <input onChange={(e)=>setSearchkey(e.target.value)} className='form-control w-50' type="text" placeholder='search the project by language' />
        </div>

        <div className='row mt-5'>
        {
          allProjects?.length>0?
          allProjects?.map(
            project=>(
              <div className='col-lg-4 me-2'>
          
          <Projectcard displayData={project}/>
       
         
    
        </div>
            )
          )
        :
        <div className='text-danger mt-5'>Nothing to display</div>
        }

        </div>
     
      </div>
      </>
   
  )
}

export default Project