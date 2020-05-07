import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Navbar from "./html-pages/Navbar"
import Stores from "./html-pages/stores"
import Login from "./html-pages/login"
import Home from "./html-pages/landing-page"
import Admin from "./html-pages/store-admin"
import SignUp from "./html-pages/sign-up"
import About from "./html-pages/about"
import PrivateRoute from './routes/private-route';
import { AuthContext } from "./context/auth";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {apiResponse: ""};
//   }
//
//   callAPI() {
//     fetch("http://localhost:9000/testAPI")
//       .then(res => res.text())
//       .then(res => this.setState({apiResponse: res}))
//       .catch(err => err);
//   }
//
//   componentDidMount() {
//     this.callAPI();
//   }
//

function App(props) {
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = React.useState(existingTokens);


  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  return (
    <AuthContext.Provider value={{authTokens, setAuthTokens: setTokens}}>
      <Router>
      <Route><Navbar /></Route>
        <Switch>
          <Route path="/login" ><Login /></Route>
          <Route path="/stores" ><Stores /></Route>
          <Route path="/about" ><About /></Route>
          <PrivateRoute path="/admin" comp={Admin}></PrivateRoute>
          <Route path="/signup"><SignUp /></Route>
          <Route exact path="/" ><Home /></Route>
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
