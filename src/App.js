import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import AboutPage from './components/AboutPage'
import NotFoundPage from './components/NotFoundPage'

class App extends Component {
  render() {
    return (
      <div>
        <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/users">user</Link></li>
            <li><Link to="/about">about</Link></li>
        </ul>
        <hr/>
        <Switch>
          <Route path="/" exact component={() => <h1>home page</h1>} />
          <Route path="/users/:user_id" component={({match}) => {
            return <h1>hello user {match.params.user_id}</h1>
          }} />
          <Route path="/users" component={() => <h1>users page</h1>} />
          <Route path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
