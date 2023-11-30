// components/Header.jsx
import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        try {
          const response = await axios.get('https://shy-cloud-3319.fly.dev/api/v1/auth/me');
          console.log(response.data);
          setIsLoggedIn(true);
        } catch (error) {
          console.log(error.response);
          setIsLoggedIn(false);
        }
      }
    };

    fetchData();
  }, [token]);

  const logoutHandler = () => {
    // Implement logout logic, e.g., clearing local storage
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">ShoeLean</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} 
              to="/Tentang">
                Tentang
                </Nav.Link>
              {isLoggedIn ? (
                <Button
                  onClick={logoutHandler}
                  color="error"
                  variant="outlined"
                  style={{ height: '50px', marginLeft: '10px', borderRadius: '30px' }}
                >
                  Logout
                </Button>
              ) : (
                <>
                  {/* <Button
                    as={Link}
                    to="/signup"
                    color="error"
                    variant="primary"
                    style={{ height: '40px', borderRadius: '10px' }}
                  >
                    Register
                  </Button>
                  <Button
                    as={Link}
                    to="/login"
                    color="error"
                    variant="outlined"
                    style={{ height: '40px', marginRight: '20px', marginLeft: '10px', borderRadius: '10px',borderColor: 'blue', color: 'blue' }}
                  >
                    Login
                  </Button> */}
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
    </>
  );
};


export default Header;
