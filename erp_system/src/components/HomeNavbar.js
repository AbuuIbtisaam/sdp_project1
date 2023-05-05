import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const HomeNavbar = () => {
  return (
    <div>
      <>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as = {Link} to = "/">School ERP</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as ={Link} to="/">Home</Nav.Link>
              <Nav.Link as ={Link} to="/Contacts">Contacts</Nav.Link>
              <NavDropdown title="About" id="collasible-nav-dropdown">
                <NavDropdown.Item as ={Link} to="/About">About</NavDropdown.Item>
                <NavDropdown.Item as ={Link} to="/Mission">Mission</NavDropdown.Item>
                <NavDropdown.Item as ={Link} to="/Vision">
                  Vision
                </NavDropdown.Item>
                <NavDropdown.Item as ={Link} to="/Objectives">Objectives</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as ={Link} to="/Address">
                  Address
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>                                       
              <Nav.Link as ={Link} to="/Login">Login</Nav.Link>
              <Nav.Link as ={Link} to="/Register">Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    </div>
  )
}

export default HomeNavbar
