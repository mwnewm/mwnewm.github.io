import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #404443;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #d6d7d8;
    &:hover {
      color: white;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar className='border-bottom' expand='lg'>
      <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
      <Navbar.Collapse id="navbar-toggle">
        <Nav className="ml-auto">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/resume">Resume</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)