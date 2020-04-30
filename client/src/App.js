import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Stores from "./html-pages/grocery-stores"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/stores" ><Stores /></Route>
      </Switch>  
    </Router>
  );
}


export default App;
