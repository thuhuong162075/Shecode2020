import React from 'react';
import './App.css';
import Signin from './components/SignIn';
import Signup from './components/Signup';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Layout1 from './components/Layout1';
import Layout from './components/Layout';
import PoliceHomepage from './components/Police/PoliceHomepage';
import ListTV from './components/Police/ListTV'
import ListTT from './components/Police/ListTT'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/signin" component = {Signin}/>
            <Route exact path="/signup" component = {Signup}/>
            <Route exact path="/" component = {Layout1}/>
            <Route exact path="/temporary" component = {Layout}/>
            <Route exact path="/admin" component={PoliceHomepage}/>
            <Route exact path="/listTV" component={ListTV}/>
            <Route exact path="/listTT" component={ListTT} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
