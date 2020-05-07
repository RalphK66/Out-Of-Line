import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./html-pages/login";
import Home from "./html-pages/landing-page";
import Admin from "./html-pages/store-admin";
import Stores from "./html-pages/stores";
import Signup from "./html-pages/signup";
import NavBar from "./html-pages/navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
        </div>
        <Switch>
          <Route path="/login"><Login /></Route>
          <Route path="/admin"><Admin /></Route>
          <Route path="/stores"><Stores /></Route>
          <Route path="/signup"><Signup /></Route>
          <Route exact path="/"><Home /></Route>
        </Switch>
      </Router>
    );
  }
}
export default App;
