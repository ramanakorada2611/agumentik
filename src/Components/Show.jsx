import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



const Show = () => {
  return (
    <>
    
    <div className='body'>
    <div className='inside-window'>
     <Navbar  expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" className='Artfeel'>Artfeel</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={{color:"white"}}>Home</Nav.Link>
            <Nav.Link href="#action2" style={{color:"white"}}>Shop</Nav.Link>
            <Nav.Link href="#action3" style={{color:"white"}}>Gallery</Nav.Link>
            <Nav.Link href="#action4" style={{color:"white"}}>Contact</Nav.Link>
            <Nav.Link href="#action5" style={{color:"white"}}>Search</Nav.Link>
            
          </Nav>
          <Form className="d-flex">
            <Link to="/signin"><Button variant="outline-primary" className='re-create-button1' on>Login</Button></Link>
           <Link to="/signup"><Button variant="outline-success" className='re-create-button2'>Signup</Button></Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     </div>
     {/* <img src="https://cdn-icons-png.flaticon.com/512/3422/3422352.png" alt='#' className='sun'/> */}
     <img src='https://cdn-icons-png.flaticon.com/128/38/38384.png' alt='#' className='birds'/>
     <img src='https://cdn-icons-png.flaticon.com/128/2224/2224678.png' alt='#' className='planet1'/>
     {/* <div className='tree'><span className='plant'>Plant the Trees</span> */}
     <img src='https://cdn-icons-png.flaticon.com/128/1285/1285179.png' alt='#' className='tree1' />
     {/* </div> */}
    </div>
    </>
  )
}

export default Show