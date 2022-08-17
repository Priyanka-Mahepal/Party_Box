import React from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import './Menubar.css'

const Menubar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/giftBox">Branded Event Boxes</Nav.Link>
              <Nav.Link href="/categoryBox">Plain Event Boxes</Nav.Link>
              <Nav.Link href="#pricing">Bespoke Boxes</Nav.Link>
              <NavDropdown title="Gifts and Party Boxes" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Cake Toppers" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#deets">LeakProofFoodCartons/Wooden Cutlery</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Coffee Cups
              </Nav.Link>
              <Nav.Link href="#deets">Conatct</Nav.Link>
            </Nav>
         
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menubar;
