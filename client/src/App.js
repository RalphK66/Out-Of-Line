import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Stores from "./html-pages/grocery-stores"
import Login from "./html-pages/login"
import Home from "./html-pages/landing-page"
import Admin from "./html-pages/store-admin"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" ><Login /></Route>
        <Route path="/stores" ><Stores /></Route>
        <Route path="/admin" ><Admin /></Route>
        <Route exact path="/" ><Home /></Route>
      </Switch>  
    </Router>
  );
}


export default App;