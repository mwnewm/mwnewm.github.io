import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './App.css';
import { NavigationBar } from './components/NavigationBar';

import {HomePage} from './pages/HomePage';
import {UnderConstruction} from './pages/UnderConstruction';
import {NoMatch} from './pages/NoMatch';
import ReactGA from 'react-ga';

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

      },
      about: {
        title: 'About Me',
      }
    }

  }
  
  render() {
    return (
      <React.Fragment>
        <Container fluid>
          <Router>
            <NavigationBar />
              <Switch>
                 {/*<Route exact path='/linkedin' component={() => { 
                  window.location.href = 'https://www.linkedin.com/in/maevewnewman/'; 
                  return null; 
                }}/>
                <Route exact path='/twitter' component={() => { 
                  window.location.href = 'https://twitter.com/MaeveNewmdev/'; 
                  return null; 
                }}/>
                <Route exact path='/github' component={() => { 
                  window.location.href = 'https://github.com/mwnewm/'; 
                  return null; 
                }}/> */}
                <Route exact path='/' component={HomePage}></Route> 
                <Route component={NoMatch}></Route>
              </Switch>
          </Router>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
