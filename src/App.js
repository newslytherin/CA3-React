import React, { Component } from "react"
import { HashRouter as Router, Route, NavLink } from "react-router-dom"
import Welcome from "./components/Welcome";
import SWAPI from "./components/swapi";

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {user: "Username"}
  }
  render() {
    return (
      <Router>
        <div>
          <ul className="header">
            <li>{this.state.user}</li>
            <li>
              <NavLink exact to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/swapi">SWAPI</NavLink>
            </li>
            <li>
              <NavLink to="/large-data-set">Large Data Set</NavLink>
            </li>
          </ul>
          <hr />
          <Route exact path="/" component={Welcome} />
          <Route path="/swapi" component={SWAPI} />
        </div>
      </Router>
    );
  }
}
