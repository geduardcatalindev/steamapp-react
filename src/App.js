import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {content: ''};
  }

  componentDidMount() {
    fetch('http://steamapp.test/data')
      .then(res => res.json())
      .then(json => {
        this.setState({
            content: json
        });
      })
      .catch(error => { console.log(error); });
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.content.a}</p>
      </div>
    );
  }
}

export default App;
