import React from 'react';
import './App.css';

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
        title: 'Title',
        subtitle: 'Subtitle',
        substitle2: 'subtitle2'
      },
      about: {
        title: 'About Me',
        subtitle: '',
        substitle2: ''
      },
      resume: {
        title: 'Resume',
        subtitle: '',
        substitle2: ''
      }
    }
  }
  
  render() {
    return (
      <div>Hello from React</div>
    );
  }
}

export default App;
