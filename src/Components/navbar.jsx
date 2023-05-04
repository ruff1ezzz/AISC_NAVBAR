import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import React, { useState } from 'react';

// personal

import white_logo from "./images/White_AISC.png";
import color_logo from "./images/Color_AISC.png";

const lightUp = {
    
}


function NavbarAI() {

  const [logoSrc, setLogoSrc] = useState(white_logo);

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="custom-nav">
      <Container>
        <Navbar.Brand href="#home" className="nav-item">
          <Image src={logoSrc} className="img-nav" fluid
            onMouseOver={() => setLogoSrc(color_logo)}
            onMouseOut={() => setLogoSrc(white_logo)}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* This is the dropdown */}
            <NavDropdown title="ABOUT" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Our Mission</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Our Team</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="INIATIVES" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            {/* This are the other normal links */}
            <Nav.Link href="#events">EVENTS</Nav.Link>
            <Nav.Link href="#hfai">HFAI</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes">
              GET INVOLVED
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarAI;
