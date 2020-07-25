import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signin from './components/SignIn';
import Signup from './components/Signup';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/signin" component = {Signin}/>
            <Route exact path="/signup" component = {Signup}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
