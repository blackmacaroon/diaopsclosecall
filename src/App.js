import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link 
} from "react-router-dom";
import Request from "./components/request";
import Admin from "./components/admin";
import Home from "./components/home";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <p>this will be an interacive map some day </p>
        </header>
        <section>
          <ul className="Nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/request">request a closure</Link>
            </li>
            <li>
              <Link to="/admin">log in (admin only)</Link>
            </li>
            
          </ul>
          <Switch>
            <Route exact path="/" component={Home}>
            </Route>
            <Route exact path="/admin" component={Admin}>
            </Route>
            <Route exact path="/request" component={Request}>
            </Route>
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
