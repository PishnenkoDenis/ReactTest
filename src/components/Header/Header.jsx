import React, { memo, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import { checkUser } from '../../redux/actions/checkUserActions';
import { logoutUser } from '../../redux/actions/logoutActions';
import getIsLoggedIn from '../../redux/selectors/selectors';

function Header() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(
    () => () => {
      dispatch(checkUser());
    },
    [],
  );

  const logout = () => dispatch(logoutUser());

  const logoutCallback = useCallback(() => {
    logout();
    navigate('/login');
  });
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand>Test App</Navbar.Brand>
        <Nav className="m-auto d-flex justify-content-around align-items-center">
          {!isLoggedIn && (
            <Button
              variant="light"
              className="mx-5"
              onClick={() => navigate('/login')}
            >
              Login
            </Button>
          )}
          <Button
            variant="light"
            onClick={() => navigate('/index')}
            disabled={!isLoggedIn}
          >
            Country Listing
          </Button>
          <Button
            variant="light"
            onClick={() => navigate('/details/:id')}
            disabled={!isLoggedIn}
          >
            Country Details
          </Button>
        </Nav>
        {isLoggedIn && (
          <Button
            variant="light"
            onClick={logoutCallback}
          >
            Logout
          </Button>
        )}
      </Container>
    </Navbar>
  );
}

export default memo(Header);
