import React, { Component } from "react"
import { HashRouter as Router, Route, NavLink } from "react-router-dom"
import Welcome from "./components/Welcome";
import User from "./components/User";
import Admin from "./components/Admin";
import SWAPI from "./components/swapi";
import LargeDataSet from "./components/LargeDataSet";

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
            <li>
              <NavLink to="/user">User</NavLink>
            </li>
            <li>
              <NavLink to="/admin">Admin</NavLink>
            </li>
          </ul>
          <hr />
          <Route exact path="/" component={Welcome} />
          <Route path="/user" component={User} />
          <Route path="/admin" component={Admin} />
          <Route path="/swapi" component={SWAPI} />
          <Route path="/large-data-set" component={LargeDataSet} />
        </div>
      </Router>
    );
  }
}
