import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import SERVER_URL from '../services/service-url';


function Projectcard({displayData}) {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <button className='btn'>
      <Card onClick={handleShow} style={{ width: '18rem', height:'22rem' }} className='p-2'>
        <Card.Img className='border border-rounded' variant="top" src={`${SERVER_URL}/uploads/${displayData?.projectImg}`} />
        <Card.Body>
          <Card.Title>{displayData?.title}</Card.Title>
          
          
        </Card.Body>
      </Card>
    </button>
    {/* modal */}
    

      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-primary'>Project title</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className="row">
            <div className="col-lg-6">
            <img style={{objectFit:'cover',width:'100%',height:'auto',borderRadius:'8px'}}  src= {`${SERVER_URL}/uploads/${displayData?.projectImg}`} alt="" />
            </div>
            <div className="col-lg-6">
               <h3>{displayData?.title}</h3>
               <h5>Language Used:<span className='fs-5 text-danger' >{displayData?.languages}</span></h5>
               <p><span>Project Overview:</span> {displayData?.overview}</p>
            </div>
          </div>

          <div className='mt-3'>
            <a href={displayData?.github} className='btn btn-secondary me-3'><i className="fa-brands fa-github"></i></a>
            <a href={displayData?.website} className='btn btn-secondary'><i className="fa-solid fa-link"></i></a>
          </div>
        </Modal.Body>
        
      </Modal>

    </>
  )
}

export default Projectcard