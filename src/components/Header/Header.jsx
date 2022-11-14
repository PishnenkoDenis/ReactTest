import React, { memo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import { checkUser } from '../../redux/actions/checkUserActions';
import { logoutUser } from '../../redux/actions/logoutActions';
import { getDetails, getIsLoggedIn } from '../../redux/selectors/selectors';

function Header() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const details = useSelector(getDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(
    () => () => {
      dispatch(checkUser());
    },
    [],
  );

  const logout = () => {
    dispatch(logoutUser());
    navigate('/login');
  };

  const navigateLogin = () => navigate('/login');

  const navigateIndex = () => navigate('/index');

  const navigateDetails = () => navigate('/details/:id');

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand>Test App</Navbar.Brand>
        <Nav className="m-auto d-flex justify-content-around align-items-center">
          {!isLoggedIn && (
            <Button
              variant="light"
              className="mx-5"
              onClick={navigateLogin}
            >
              Login
            </Button>
          )}
          <Button
            variant="light"
            onClick={navigateIndex}
            disabled={!isLoggedIn}
          >
            Country Listing
          </Button>
          <Button
            variant="light"
            onClick={navigateDetails}
            disabled={!isLoggedIn || !details.length}
          >
            Country Details
          </Button>
        </Nav>
        {isLoggedIn && (
          <Button
            variant="light"
            onClick={logout}
          >
            Logout
          </Button>
        )}
      </Container>
    </Navbar>
  );
}

export default memo(Header);
