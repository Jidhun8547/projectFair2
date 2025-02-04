import React, { createContext, useEffect, useState } from 'react'


export const addResponseContext=createContext()

export const editResponseContext=createContext()

// 31dec
export const authorizationContext=createContext()

function ContextsAPI({children}) {
    const [addResponse,setAddResponse]=useState("")
    const [editResponse,setEditResponse]=useState("")
    //  dec31
    const [isAuthorized,setIsAuthorized]=useState(false)
     
    useEffect(() => {

      if (sessionStorage.getItem("token")) {

        setIsAuthorized(true)
        
      }
      else{
        setIsAuthorized(false)
      }
      
      
    }, [isAuthorized])
    

  return (
    <div>
        <authorizationContext.Provider value={{isAuthorized,setIsAuthorized}}>
          <addResponseContext.Provider value={{addResponse,setAddResponse}}>
          <editResponseContext.Provider value={{editResponse,setEditResponse}}>
          {children}
          </editResponseContext.Provider>
      </addResponseContext.Provider>
        </authorizationContext.Provider>
    </div>
  )
}



export default ContextsAPI