import React from 'react'
import {MDBContainer, MDBCol, MDBRow, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import './Home';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import LoginImage from "../assets/images/LoginImage.png";
import HomeNavbar from './HomeNavbar';
import {useState} from 'react';
//import axios from 'axios';

export const Login = () => { 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')    
    
    async function loginUser(event) {
      event.preventDefault()
      const response = await fetch('http://localhost:4321/login',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,          
        }),
      })
    const data = await response.json()
    if (data.user) {
      alert('Login successful')
      window.location.href='/pages/HomeDash'
    } else {
      alert('Please check your credentials') 
    }
    console.log(data)
    
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
                      
              <h5 className="text-center fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Enter your Credentials to sign in</h5>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <MDBInput required onChange={(event)=>setEmail(event.target.value)} type="email" label="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <MDBInput onChange={(event)=>setPassword(event.target.value)} type="password" label="Password" required/>
                </Form.Group>
              </Form>
    
              <div className="d-flex justify-content-between mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                <a href="!#">Forgot password?</a>
              </div>

              <Button onClick={loginUser}>Login</Button>                   


            </MDBCol>
                
          </MDBRow>   
          <div>
                
          </div>           
        </MDBContainer>
        </>
      );
}
