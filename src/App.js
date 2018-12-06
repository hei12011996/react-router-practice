import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
            <div>
                <ul>
                    <Link to="/about">about</Link>
                </ul>
                <hr/>
                <Route path="/about" component = {() => <span>ABOUT</span>} />
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
