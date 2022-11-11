import React, { memo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { checkUser } from '../../redux/actions/checkUserActions';
import { logoutUser } from '../../redux/actions/logoutActions';

function Header() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => () => {
    dispatch(checkUser());
  }, []);
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand>Test App</Navbar.Brand>
        <Nav className="m-auto d-flex justify-content-around align-items-center">
          {!isLoggedIn && <Link to="/login" className="mx-5 text-decoration-none">Login</Link>}
          <Link to="/index" className="mx-5 text-decoration-none">Country Listing</Link>
          <Link to="/details/:id" className="mx-5 text-decoration-none">Country Details</Link>
        </Nav>
        {isLoggedIn
        && (
        <Button
          variant="light"
          onClick={() => dispatch(logoutUser())}
        >
          Logout
        </Button>
        )}
      </Container>
    </Navbar>
  );
}

export default memo(Header);
