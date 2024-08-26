import './NavBarComponent.css'

import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SidebarComponent from '../SideBar/SideBar';


function NavbarComponent() {

  const [isHovered, setIsHovered] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const handleShowSidebar = () => setShowSidebar(true);
  const handleCloseSidebar = () => setShowSidebar(false);

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container fluid>
        <Navbar.Brand href="#home" className="custom-title">BEETTER</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">
              <i class="bi bi-search"></i>
            </Nav.Link>
            <Nav.Link 
            href="#link"  
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
              <i className={`bi ${isHovered ? 'bi-bell-fill' : 'bi-bell'} notification`}></i>
            </Nav.Link>
            <Nav.Link onClick={handleShowSidebar} className="dropdown">
            <i class="bi bi-distribute-vertical"></i>
            </Nav.Link>

            <SidebarComponent  show={showSidebar} onHide={handleCloseSidebar} />

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;