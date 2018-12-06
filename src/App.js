import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import AboutPage from './components/AboutPage'
import NotFoundPage from './components/NotFoundPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
            <Link to="/about">about</Link>
        </ul>
        <hr/>
        <Switch>
          <Route path="/" exact component={() => <h1>home page</h1>} />
          <Route path="/user" component=={() => <h1>user page</h1>} />
          <Route path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
