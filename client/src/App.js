import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./html-pages/login";
import NavBar from "./html-pages/navbar";
import Home from "./html-pages/landing-page";
import About from "./html-pages/about";
import Stores from "./html-pages/stores";
import Signup from "./html-pages/signup";
import Admin from "./html-pages/admin";
import PrivateRoute from './routes/private-route';
import AddUser from "./html-pages/admin-form";
import Contact from "./html-pages/contact";
import ResetPassword from "./html-pages/password-reset";

class App extends React.Component {
  render() {
    return (
      
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/login"><Login/></Route>
          <Route path="/stores"><Stores/></Route>
          <Route path="/about"><About/></Route>
          <PrivateRoute path="/admin" comp={Admin}></PrivateRoute>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/adduser"><AddUser /></Route>
          <Route path="/contact"><Contact /></Route>
          <Route path="/signup"><Signup /></Route>
          <Route path="/password_reset"><ResetPassword /></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
