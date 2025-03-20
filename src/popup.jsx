import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import React from 'react';


export default function Popup(data){
      const updateData=()=>{
      
fetch(`https://67d7ed189d5e3a10152c9b0a.mockapi.io/student/detail/${data.fieldData.id}`, {
  method: 'PUT', // or PATCH
  headers: {'content-type':'application/json'},
  body: JSON.stringify(data.fieldData)
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(task => {
  data.setDataUpdate(!(data.dataUpdates));
}).catch(error => {
  console.log(error);
})
data.btnclose();
    }
   
    
    const createUser=()=>
    fetch('https://67d7ed189d5e3a10152c9b0a.mockapi.io/student/detail', {
      method: 'POST',
      headers: {'content-type':'application/json'},
      // Send your data in the request body as JSON
      body: JSON.stringify(item.fieldData)
    }).then(res => {
      if (res.ok) {
          return res.json();
      }
      // handle error
    }).then(task => {
      alert("Added successfully")
      data.setUpdate(!data.update)
    }).catch(error => {
      // handle error
    })
    return(
        <>


      <Modal show={data.show} onHide={data.btnclose}>
        <Modal.Header closeButton>
          {data.fieldData.id?<Modal.Title>Edit Data</Modal.Title>:<Modal.Title>Add Data</Modal.Title>}
          <Modal.Title>Edit Your Profile </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Name"
                autoFocus
                defaultValue={data.fieldData.NAME}
                onChange={(e)=>data.setFieldData({...data.fieldData,NAME:e.target.value})}
              />
              
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email </Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                defaultValue={data.fieldData.EMAILID}
                onChange={(e)=>data.setFieldData({...data.fieldData,EMAILID:e.target.value})}
              />
              
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone No </Form.Label>
              <Form.Control
                type="tell"
                placeholder="Enter Your Number"
                autoFocus
                defaultValue={data.fieldData.PHONENO}
                onChange={(e)=>data.setFieldData({...data.fieldData,PHONENO:e.target.value})}
              />
              
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your location"
                autoFocus
                defaultValue={data.fieldData.LOCATION}
                onChange={(e)=>data.setFieldData({...data.fieldData,LOCATION:e.target.value})}
              />
              
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label> Qualification</Form.Label>
              <Form.Control
                type="text"
                placeholder="BE/B.Tech..."
                autoFocus
                defaultValue={data.fieldData.QUALIFICATION}
                onChange={(e)=>data.setFieldData({...data.fieldData,QUALIFICATION:e.target.value})}
              />
              
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={data.btnclose}>
            Close
          </Button>
         
          {data.fieldData.id?<Button variant="primary" onClick={updateData}>save changes</Button>:
          <Button variant="success" onClick={createUser}>Create</Button>}
        </Modal.Footer>
      </Modal>
        </>
    )
}