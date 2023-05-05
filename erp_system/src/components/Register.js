import React from 'react'
import {MDBContainer, MDBCol, MDBRow, MDBInput, MDBCheckbox, MDBBtn, MDBValidation, MDBValidationItem } from 'mdb-react-ui-kit';
import './Home';
import Form from 'react-bootstrap/Form';
import LoginImage from "../assets/images/LoginImage.png";
import HomeNavbar from './HomeNavbar';
import {useState} from 'react';
import axios from 'axios';

export const Register = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [role,setRole]=useState("");

  const addToList=()=>{
    axios.post("/newUser",{Email:email, Password:password, Role:role});
    console.log(email,password,role);
      alert('User added successfully')
      window.location.href='./login'
  }
  
    return (
      <>
      <HomeNavbar/>
        <MDBContainer fluid className="p-3 my-5 h-custom">
    
          <MDBRow>
    
            <MDBCol col='10' md='6'>
              <img src={LoginImage} className="img-fluid" alt='' />
            </MDBCol>
    
            <MDBCol col='4' md='6'>
                      
              <h5 className="text-center fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Registration form</h5>
              
                <MDBValidation>
                  <MDBValidationItem>
                  <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <MDBInput
                   value={email}
                   id='validationCustom01'
                   required 
                   onChange={(event)=>setEmail(event.target.value)} 
                   type="email" 
                   placeholder="Enter email"
                  />
                  </Form.Group>
                </MDBValidationItem>
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <MDBInput onChange={(event)=>setPassword(event.target.value)} type="password" placeholder='Enter password' required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="role">
                  <Form.Label>Role</Form.Label>
                  <MDBInput onChange={(event)=>setRole(event.target.value)} type="text" placeholder="Enter role" required/>
                </Form.Group>                 
                </MDBValidation>
              
    
              <div className="d-flex justify-content-between mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                
              </div>

              <MDBBtn onClick={addToList} >Register</MDBBtn>                   


            </MDBCol>
                
          </MDBRow>   
          <div>
          
          </div>           
        </MDBContainer>
        </>
      );
}
