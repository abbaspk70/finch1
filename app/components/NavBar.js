'use client'
import React, { Fragment } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavbarBrand from 'react-bootstrap/NavbarBrand'
if (typeof window !== "undefined") {
  //client side only code
  window.$ = window.jQuery = require("jquery");
}

import {  useState } from 'react';
import Script from 'next/script';

const navData = [
    {
        title: 'home', pathname: '/', subMenu: [{ title: 'home1', pathname: '/home1' }, { title: 'home2', pathname: '/home2' }, { title: 'home3', pathname: '/home3' }]
    },
    {
        title: 'headers', pathname: '/', subMenu: [{ title: 'home1', pathname: '/home1' }, { title: 'home2', pathname: '/home2' }, { title: 'home3', pathname: '/home3' }]
    },
    {
        title: 'about us', pathname: '/', subMenu: [{ title: 'home1', pathname: '/home1' }, { title: 'home2', pathname: '/home2' }, { title: 'home3', pathname: '/home3' }]
    },
    {
        title: 'our journal', pathname: '/', subMenu: [{ title: 'home1', pathname: '/home1' }, { title: 'home2', pathname: '/home2' }, { title: 'home3', pathname: '/home3' }]
    },
    {
        title: 'portfolio', pathname: '/', subMenu: [{ title: 'home1', pathname: '/home1' }, { title: 'home2', pathname: '/home2' }, { title: 'home3', pathname: '/home3' }]
    },
    {
        title: 'services', pathname: '/', subMenu: [{ title: 'home1', pathname: '/home1' }, { title: 'home2', pathname: '/home2' }, { title: 'home3', pathname: '/home3' }]
    },
    {
        title: 'features', pathname: '/', subMenu: [{ title: 'home1', pathname: '/home1' }, { title: 'home2', pathname: '/home2' }, { title: 'home3', pathname: '/home3' }]
    },
    {
        title: 'contact', pathname: '/', subMenu: [{ title: 'home1', pathname: '/home1' }, { title: 'home2', pathname: '/home2' }, { title: 'home3', pathname: '/home3' }]
    }

]

export default function NavBar() {
  const [stickyNav, setStickyNav] = useState(false);
  if (typeof window !== 'undefined') {
  window.onscroll = function() {handleScroll()};

  if (typeof document !== 'undefined') {
  var stickyContainer = document.getElementById("basic-navbar-nav");
  }
  const sticky = stickyContainer;
    const handleScroll = () => {
      if (window.pageYOffset > 250) { 
        setStickyNav(true);
       }
       else {
        setStickyNav(false);
       }

    }
  };
  return (
    <div className='block block--photography-menu'>
    <div className='container-fluid g-0 '>
      <header className=' top d-none d-sm-block'>
        <img src="/logo@2x.png" width={55} alt='finch'/>
      </header>
    <section>
    <Navbar expand="sm" className="bg-primary">
    <Container fluid>
      <Navbar.Brand className=' d-sm-none ' href="#home">
        <img src="/logo@2x.png" width={50}/>
      </Navbar.Brand>
      <Navbar.Toggle className='' children={<i></i>} aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className={`w-100 ${stickyNav && 'fixed bg-opacity-100'}`} id="basic-navbar-nav">
        <Nav className="">
          <Nav.Link className='px-md-3 px-sm-5' href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown" menuVariant='dark'>
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </section>
  </div>
    <Script src="https://kit.fontawesome.com/f1c2f9d359.js" crossOrigin="anonymous"/>
  </div>
    );
}



{/* <Navbar expand="sm" className="bg-primary p-0">
<Container className='navbar-wrapper flex-sm-column p-sm-0' fluid>
  <Container className='navbar-header text-sm-center py-1  py-md-4'>
  <Navbar.Brand className='py-5 text-sm-center w-100 overflow-hidden ' href="#home">
    <img src='/logo@2x.png' width={69}></img>
  </Navbar.Brand>
  <Navbar.Toggle className='my-4 float-end bg-secondary text-white' aria-controls="basic-navbar-nav" />
  </Container>
  <Navbar.Collapse className={`w-100 py-2 px-5 ${stickyNav && 'fixed bg-opacity-100 '}`} id="basic-navbar-nav">
    <Nav className="me-auto text-sm-center mx-sm-auto" id="myId">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown" menuVariant='dark'>
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
          Another action
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">
          Separated link
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>  */}