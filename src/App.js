import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link 
} from "react-router-dom";
import Request from "./components/request";
import Admin from "./components/admin";
import Schedule from "./components/schedule";
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img className="Map" src="denmap.jpg" alt="map of den pavement areas"/>
          <p>this will be an interacive map some day </p>
        </header>
        <section>
          <ul className="Nav">
            <img className="logo" src="den-logo.jpg"></img>
            <li>
              <Link to="/">current schedule</Link>
            </li>
            <li>
              <Link to="/request">request a closure</Link>
            </li>
            <li>
              <Link to="/admin">log in (admin only)</Link>
            </li>
            
          </ul>
          <Switch>
            <Route exact path="/" component={Schedule}>
            </Route>
            <Route exact path="/admin" component={Admin}>
            </Route>
            <Route exact path="/request" component={Request}>
            </Route>
          </Switch>
        </section>
        <footer>
				<div className="copyright">
					<p>Copyright &copy; 2020 Closecall | Kayla Crow </p>
				</div>
			</footer>
      </div>
    </Router>
  );
}

export default App;
