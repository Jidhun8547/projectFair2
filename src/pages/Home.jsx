import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'

import asdf from '../asdf.png';
import { Link, useNavigate } from 'react-router-dom';
import Projectcard from '../components/Projectcard'
import Card from 'react-bootstrap/Card';
import { homeProjectAPI } from '../services/allapi';
import { useState } from 'react';
import { toast } from 'react-toastify';









function Home() {
  const [homeProject, setHomeProject] = useState([])
  console.log(homeProject);
  const navigate = useNavigate()


  useEffect(() => {

    getHomeProject()


  }, [])

  const getHomeProject = async () => {
    try {
      const result = await homeProjectAPI()
      console.log(result);
      if (result.status == 200) {
        setHomeProject(result.data)
      }


    } catch (err) {
      console.log(err);


    }
  }

  const handleProject=(e) => {
    e.preventDefault()
    if (sessionStorage.getItem("token")) {
      navigate('/projects')
    }
    else {
      toast.warning("please login")
    }

  }


  return (
    <>

      <div className='container d-flex justify-content-center'>

        <Row style={{ marginTop: '90px' }}>

          <Col lg={6} md={12} sm={12} className='p-3' >

            <h1 style={{ fontFamily: "Spicy Rice", color: ' yellow' }} className='mt-5'><i className="fa-brands fa-docker"></i> Project Fair</h1>
            <p>One top destination for all software development project where you can add and manage your projects as well as access all projects available
              in our website.What are you waiting for!!!
            </p>
            {
              sessionStorage.getItem("token") ? <Link to={'/dashboard'}><button className='btn btn-primary mt-3'>Manage your project</button></Link> :

                <Link to={'/login'}><button className='btn btn-primary mt-3'>Start to explore</button></Link>
            }

          </Col>

          <Col lg={6} md={12} sm={12}>
            <img className='w-100' src={asdf} alt="" />
          </Col>

        </Row>





      </div>

      <div className='mt-5 text-center'>

        <h1 className='' style={{ fontSize: '60px', fontFamily: "Dancing Script", color: 'orange' }}>Explore Our project</h1>
        <marquee behavior="" direction="">
          <div>
            {
              homeProject?.length > 0 &&

              homeProject?.map(project => (
                <div>
                  <Projectcard displayData={project} />
                </div>
              ))
            }
          </div>
        </marquee>

        
        <div className="  text-center my-2">
          <Link onClick={handleProject} className='btn-link'>Click Here to view Project</Link>
        </div>



      </div>

      
      <div className='d-flex mt-5 flex-column'>
        <h1 className='text-center' style={{ color: 'red' }}>Our testimonial</h1>
        <div className='d-flex justify-content-center  gap-5'>
          <div className="d-flex justify-content-center ">
            <Card style={{ width: '18rem', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
              <Card.Img
                variant="top"
                src="https://as1.ftcdn.net/v2/jpg/02/42/45/90/1000_F_242459076_53ffNaKxcGS1ioScWiSt50e9ltwvynqt.jpg"
                style={{
                  borderRadius: '50%', // Makes the image round
                  width: '100px', // Sets width of the rounded image
                  height: '100px', // Ensures it's a perfect circle
                  objectFit: 'cover', // Ensures the image is scaled properly
                  margin: '10px auto' // Centers the image
                }}
              />
              <Card.Body>
                <Card.Title style={{ color: 'grey' }}>Max Miller</Card.Title>
                <Card.Text>
                  <div>
                    <i className="fa-solid fa-star" style={{ color: 'darkorange' }}></i>
                    <i className="fa-solid fa-star" style={{ color: 'darkorange' }}></i>
                    <i className="fa-solid fa-star" style={{ color: 'darkorange' }}></i>
                    <i className="fa-solid fa-star" style={{ color: 'darkorange' }}></i>
                  </div>
                  <p style={{ color: 'grey' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus dolorum omnis obcaecati cumque velit laboriosam reprehenderit, voluptatem commodi itaque qui? Aliquid aspernatur suscipit sapiente iste facere eligendi, in iure? Odit.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="d-flex  justify-content-center">
            <Card style={{ width: '18rem', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
              <Card.Img
                variant="top"
                src="https://as1.ftcdn.net/v2/jpg/02/42/45/90/1000_F_242459076_53ffNaKxcGS1ioScWiSt50e9ltwvynqt.jpg"
                style={{
                  borderRadius: '50%', // Makes the image round
                  width: '100px', // Sets width of the rounded image
                  height: '100px', // Ensures it's a perfect circle
                  objectFit: 'cover', // Ensures the image is scaled properly
                  margin: '10px auto' // Centers the image
                }}
              />
              <Card.Body>
                <Card.Title style={{ color: 'grey' }}>Max Miller</Card.Title>
                <Card.Text>
                  <div>
                    <i className="fa-solid fa-star" style={{ color: 'darkorange' }}></i>
                    <i className="fa-solid fa-star" style={{ color: 'darkorange' }}></i>
                    <i className="fa-solid fa-star" style={{ color: 'darkorange' }}></i>
                    <i className="fa-solid fa-star" style={{ color: 'darkorange' }}></i>
                  </div>
                  <p style={{ color: 'grey' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus dolorum omnis obcaecati cumque velit laboriosam reprehenderit, voluptatem commodi itaque qui? Aliquid aspernatur suscipit sapiente iste facere eligendi, in iure? Odit.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="d-flex justify-content-center">
            <Card style={{ width: '18rem', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
              <Card.Img
                variant="top"
                src="https://as1.ftcdn.net/v2/jpg/02/42/45/90/1000_F_242459076_53ffNaKxcGS1ioScWiSt50e9ltwvynqt.jpg"
                style={{
                  borderRadius: '50%', // Makes the image round
                  width: '100px', // Sets width of the rounded image
                  height: '100px', // Ensures it's a perfect circle
                  objectFit: 'cover', // Ensures the image is scaled properly
                  margin: '10px auto' // Centers the image
                }}
              />
              <Card.Body>
                <Card.Title style={{ color: 'grey' }}>Max Miller</Card.Title>
                <Card.Text>
                  <div>
                    <i className="fa-solid fa-star" style={{ color: 'darkorange' }}></i>
                    <i className="fa-solid fa-star" style={{ color: 'darkorange' }}></i>
                    <i className="fa-solid fa-star" style={{ color: 'darkorange' }}></i>
                    <i className="fa-solid fa-star" style={{ color: 'darkorange' }}></i>
                  </div>
                  <p style={{ color: 'grey' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus dolorum omnis obcaecati cumque velit laboriosam reprehenderit, voluptatem commodi itaque qui? Aliquid aspernatur suscipit sapiente iste facere eligendi, in iure? Odit.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home