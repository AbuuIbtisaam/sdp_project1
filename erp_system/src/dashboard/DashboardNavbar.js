import { MDBIcon } from 'mdb-react-ui-kit';
import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export const DashboardNavbar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as = {Link} to = "/">School ERP</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
           
            <Nav className='ms-auto'> 
            <span><MDBIcon fas icon="user-circle" size='3x'/></span>
              <NavDropdown  id="collasible-nav-dropdown" >
                <NavDropdown.Item as ={Link} to="/">Profile</NavDropdown.Item>
                <NavDropdown.Item as ={Link} to="/">Mission</NavDropdown.Item>
                <NavDropdown.Item as ={Link} to="/Vision">
                  Vision
                </NavDropdown.Item>
                <NavDropdown.Item as ={Link} to="/Objectives">Objectives</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as ={Link} to="/Login">
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
