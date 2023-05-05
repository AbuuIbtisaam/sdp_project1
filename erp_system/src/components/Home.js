import React from 'react'
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import './Home';
import Button from 'react-bootstrap/Button';
import HomeImage from "../assets/images/HomeImage.jpg";
import HomeNavbar from './HomeNavbar';
export const Home = () => {
    return (
      <>
      <HomeNavbar/>
        <MDBContainer fluid className="pd- my- h-custom">
    
          <MDBRow>
            <MDBCol col='12' md='12' className='text-white bg-warning pt-2'>
              <marquee> Welcome to the School Enterprise Resource Planning (School ERP)</marquee>
            </MDBCol>
    
            <MDBCol col='12' md='12'>           
              <div className='text-center text-md-start mt-18 pt-2'>
                <img class= "img-fluid" src={HomeImage} alt="HomeImage"/>
              </div>
    
            </MDBCol>

          </MDBRow>              
        </MDBContainer>
        </>
      );
}
