import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MDBIcon } from 'mdbreact';
import pdf from '../assets/MaeveNewmanResume.pdf';

const Styles = styled.div`
  .navbar {
    background-color: var(--independence);
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #d6d7d8;
    &:hover {
      color: white;
    }
    &:visited {
      color: #d6d7d8;
    }
  }
  .nav-icon {
    padding-right: 10px;
  }
  
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar className='border-bottom' expand='lg'>
      <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
      <Navbar.Collapse id="navbar-toggle">
        <Nav className='p-2'>
          <Link className='nav-link' to={{ pathname: "https://www.linkedin.com/in/maevewnewman/" }} target="_blank">LinkedIn
            {/* <MDBIcon fab icon="linkedin" size="2x" className='nav-icon' /> */}
          </Link>
          <Link className='nav-link' to={{ pathname: "https://twitter.com/MaeveNewmdev/" }} target="_blank">Twitter
            {/* <MDBIcon fab icon="twitter-square" size="2x" className='nav-icon' /> */}
          </Link>
          <Link className='nav-link' to={{pathname: "https://github.com/mwnewm/"}} target="_blank">Github
            {/* <MDBIcon fab icon="github-square" size="2x" className='nav-icon' /> */}
          </Link>
        </Nav>
        <Nav className="ml-auto">
          <a className="nav-link" href={pdf}>Resume</a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)