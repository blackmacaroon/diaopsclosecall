import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link 
} from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core";
import Schedule from "./components/schedule";
import Request from "./components/request";
import Admin from "./components/admin";
import theme from "./utils/theme";
import './App.scss';

function App() {
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <img className="Map" src="denmap.png" alt="map of den pavement areas"/>
            <p>depending on the moused-over (on tablet, touched) pavement area, this will tell what the closure is for, it's duration, etc. </p>
          </header>
          <section>
            <ul className="Nav">
              <img className="logo" src="den-logo.jpg" alt="denver airport logo purple"></img>
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
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
