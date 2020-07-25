import React from 'react';
import './App.css';
import Signin from './components/SignIn';
import Signup from './components/Signup';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Layout1 from './components/Layout1';
import Layout from './components/Layout';
import LayoutTemporary from './components/LayoutTemporary';
import LayoutAbsence from './components/LayoutAbsence';
import LayoutContact from './components/LayoutContact';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/signin" component = {Signin}/>
            <Route exact path="/signup" component = {Signup}/>
            <Route exact path="/" component = {Layout1}/>
            <Route exact path="/temporary" component = {LayoutTemporary}/>
            <Route exact path="/absence" component = {LayoutAbsence}/>
            <Route exact path="/contact" component = {LayoutContact}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
