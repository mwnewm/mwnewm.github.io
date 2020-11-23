import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './App.css';
import { NavigationBar } from './components/NavigationBar';


import {HomePage} from './HomePage';
import {Resume} from './Resume';
import {NoMatch} from './NoMatch';

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
                <Route exact path='/' component={HomePage}></Route>
                <Route exact path='/resume' component={Resume}></Route>
                <Route component={NoMatch}></Route>
              </Switch>
          </Router>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
