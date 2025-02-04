import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import View from '../components/View'
import Profile from '../components/Profile'






function Dashboard() {
  const [userName, setUsername] = useState("")
  console.log(userName);

  // useEffect(()=>{
  //   if(sessionStorage.getItem("user")){
  //     // setUsername(JSON.parse(sessionStorage.getItem("user").userName))
  //     JSON.parse(sessionStorage.getItem("user").userName)

  //   }
  //   else{
  //     setUsername("")
  //   }
  // },[])

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (user) {
      setUsername(JSON.parse(user).userName); // Parse the string into an object, then access userName
    } else {
      setUsername("");
    }
  }, []);

  return (

    <>
      <Header />
      <div className='container'>
        {/* <h2>Welcome <span className='text-danger'>{userName.split(" ")[0]}</span></h2> */}
        <h2>
          Welcome <span className="text-danger">{userName?.split(" ")[0] || "Guest"}</span>
        </h2>
        <div className='row'>
          <div className='col-lg-8'>

            <View />
          </div >

          <div className='col-lg-4'>
            <h3>Profile</h3>
            <Profile />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard