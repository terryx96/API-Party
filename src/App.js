import React, { Component } from 'react';
import './App.css';

import {Route, Switch, NavLink} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className = 'App-header'>
        <h3>Aint no party like an API party</h3>
          <h1>API Party ;)</h1>
        </div>

        <ul className = 'navLinks'>
          <li>
            <NavLink to="/github">GitHub</NavLink>
          </li>
        </ul>

        <Switch>
          <Route path = '/github' render = {() => (<h1>GitHub!</h1>)} />
          <Route render = {() => (<p>Click one of the links above</p>) } />
        </Switch>
      
      </div>
    );
  }
}

export default App;
