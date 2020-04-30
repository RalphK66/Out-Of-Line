import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Stores from "./html-pages/grocery-stores"
import Login from "./html-pages/login"
import Home from "./html-pages/landing-page"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" ><Login /></Route>
        <Route path="/stores" ><Stores /></Route>
        <Route exact path="/" ><Home /></Route>
      </Switch>  
    </Router>
  );
}


export default App;