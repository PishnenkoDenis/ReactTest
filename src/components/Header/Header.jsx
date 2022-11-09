import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand>Test App</Navbar.Brand>
        <Nav className="m-auto d-flex justify-content-around align-items-center">
          <Link to="/login" className="mx-5 text-decoration-none">Login</Link>
          <Link to="/" className="mx-5 text-decoration-none">Country Listing</Link>
          <Link to="/details/:id" className="mx-5 text-decoration-none">Country Details</Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default memo(Header);
