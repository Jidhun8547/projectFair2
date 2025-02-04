import SERVER_URL from "../services/service-url"
import commonAPI from "../services/common-api"


// api call for register user

export const registerAPI=async(reqBody)=>{
   return await commonAPI("POST",`${SERVER_URL}/register`,reqBody)
}
//   api call for login
export const loginApi=async(reqBody)=>{
   return await commonAPI("POST",`${SERVER_URL}/login`,reqBody) 
}

// api call for add project

export const addProjectAPI=async(reqBody,reqHeader)=>{
   return await commonAPI("POST",`${SERVER_URL}/add-project`,reqBody,reqHeader)
}
// api call for get home projects


export const homeProjectAPI=async()=>{
   return await commonAPI("GET",`${SERVER_URL}/get-home-projects`,"")
}
//  api call for get user projects
export const userProjectAPI=async(reqHeader)=>{
   return await commonAPI("GET",`${SERVER_URL}/get-user-projects`,"",reqHeader)
}
//  api call for get all projects
export const allProjectAPI=async(searchkey,reqHeader)=>{
   return await commonAPI("GET",`${SERVER_URL}/get-all-projects?search=${searchkey}`,"",reqHeader)
}
// api edit
export const editProjectAPI=async(pid,reqBody,reqHeader)=>{
   return await commonAPI("PUT",`${SERVER_URL}/edit-user-projects/${pid}`,reqBody,reqHeader)

}
// api delete
export const deleteProjectAPI=async(pid,reqHeader)=>{
   return await commonAPI("DELETE",`${SERVER_URL}/delete-user-project/${pid}`,{},reqHeader)

}
// update profille
export const ediProfileAPI=async(reqBody,reqHeader)=>{
   return await commonAPI("PUT",`${SERVER_URL}/edit-profile`,reqBody,reqHeader)
}
