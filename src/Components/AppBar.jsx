import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
// import NavDropdown from 'react-bootstrap/NavDropdown';
<<<<<<< HEAD
import { Link } from "react-router-dom";
import '../App.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

=======
import { Link } from 'react-router-dom'
>>>>>>> d2ec3b7ea35434d5b11f1d40aaf4fb096352c092

function AppBar() {


  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 3000
    });

  },[])
  return (
    <>
      {/* <Navbar>
     <Container>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}

<<<<<<< HEAD



    <Navbar expand="lg"  className='bg-dark text-white' >
      <Container>
    <Navbar.Brand href="#home" className='text-white animation' data-aos="fade-right" > AL SMART STORE <img
              src="./assets/imges/img1.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              // alt="React Bootstrap logo"
            />
</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto animation" data-aos="fade-left">
           
            <Nav.Link ><Link className='ms-4 btn btn-primary' to="/login" >Login</Link></Nav.Link>
            <Nav.Link ><Link className=' btn btn-primary' to="/signup" >Sign Up</Link></Nav.Link>
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


=======
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link className='nav-link' to="/">Home</Link>
              <Link className='nav-link' to="/products">Products</Link>
              {/* <Nav.Link ><Link to="/products" >CategoryPage</Link></Nav.Link> */}
              <Link className="nav-linkms-4 btn btn-dark" to="/login">
                Login
              </Link>
              <Link  className="nav-link btn btn-dark" to="/signup">
                Sign Up
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
>>>>>>> d2ec3b7ea35434d5b11f1d40aaf4fb096352c092
    </>
  )
}

export default AppBar
