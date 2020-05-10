import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link 
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
         <p>hi hi hi hihi hi </p>
        </header>
        <section>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/admin">Login</Link>
            </li>
            <li>
              <Link to="/request">Request Closure</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/">
            </Route>
            <Route path="/admin">
            </Route>
            <Route path="/request">
            </Route>
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
