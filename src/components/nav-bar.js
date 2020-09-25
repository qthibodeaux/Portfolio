import React from "react";
import { Nav, Navbar } from "react-bootstrap";

function NavBar () {
    return (
        <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link href="#tabanchor"><strong>Tabs</strong></Nav.Link>
            <Nav.Link href="#contactanchor"><strong>Contact</strong></Nav.Link>
            <Nav.Link href="QuintusThibodeauxResume92020.pdf" target="_blank"><strong>Resume</strong></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
    )
}

export default NavBar;