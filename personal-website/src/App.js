import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import HomePage from './pages/Home';
import AboutPage from './pages/About';


class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      title: 'Maeve Newman',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Resume', path: '/resume'}
      ],
      home: {
        title: 'Home',
        subtitle: 'Subtitle',
      },
      about: {
        title: 'About Me',
      },
      resume: {
        title: 'Resume',
      }
    }
  }
  
  render() {
    return (
      <Router>
        <Container fluid={true} >
          <Navbar className='border-bottom' bg='transparent' expand='lg'>
            <Navbar.Brand>Maeve Newman</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/resume">Resume</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path='/' exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subtitle}/>}></Route>
          <Route path='/about' exact render={() => <AboutPage title={this.state.about.title} />}></Route>

          </Container>
      </Router>
    );
  }
}

export default App;
