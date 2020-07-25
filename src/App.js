import React from 'react';
import './App.css';
import Signin from './components/SignIn';
import Signup from './components/Signup';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Layout from './components/Layout';
import Temporary from './components/Temporary';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Temporary />
          {/* <Switch>
            <Route exact path="/signin" component = {Signin}/>
            <Route exact path="/signup" component = {Signup}/>
          </Switch> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
