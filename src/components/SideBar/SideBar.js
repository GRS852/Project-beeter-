import React from 'react';
import './SideBar.css'

import { Offcanvas, Nav } from 'react-bootstrap';

function SidebarComponent({ show, onHide }) {
  return (
    <Offcanvas show={show} onHide={onHide} placement="end" className="custom-offcanvas">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>BETTER</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="flex-column">
          <Nav.Link href="/">Pagina principal</Nav.Link>
          <Nav.Link href="#courses">Cursos</Nav.Link>
          <Nav.Link href="/perfil">Meu perfil</Nav.Link>
          <Nav.Link href="/forum">Forum</Nav.Link>
          <Nav.Link href="#help">Ajuda</Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default SidebarComponent;
