import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

function AppBar2() {
  return (
    <>
   



    <Navbar expand="lg" className="w-100 bg-primary "  >
      <Container className="  bg-primary ">
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="  bg-primary "  />
        <Navbar.Collapse id="basic-navbar-nav" className="  bg-primary ">
          <Nav className=" m-auto bg-primary " >
            <Nav.Link ><Link className="  bg-primary text-white text-decoration-none " to="/" >Home</Link></Nav.Link>
            <Nav.Link ><Link className="  bg-primary text-white text-decoration-none " to="/products" >Products</Link></Nav.Link>
            <Nav.Link ><Link className="  bg-primary text-white text-decoration-none" to="#offers" >New Arrivals</Link></Nav.Link>
            <Nav.Link ><Link className="  bg-primary text-white text-decoration-none" to="/products">Eid Dhamaka Sale</Link></Nav.Link>
            <Nav.Link ><Link className="  bg-primary text-white text-decoration-none" to="/products" >Special Offers</Link></Nav.Link>
            
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </>
  )
}

export default AppBar2
