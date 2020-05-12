import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./html-pages/login";
import NavBar from "./html-pages/navbar";
import Home from "./html-pages/landing-page";
import Admin from "./html-pages/store-admin";
import SignUp from "./html-pages/sign-up";
import NavBar from "./html-pages/Navbar";
import AddUser from "./html-pages/admin-form";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//
//     const existingTokens = localStorage.getItem("tokens");
//     const [authTokens, setAuthTokens] = React.useState(existingTokens);
//
//     // const setTokens = (data) => {
//     //
//     // }
//   }
//
//   setTokens(data) {
//     localStorage.setItem("tokens", JSON.stringify(data));
//     setAuthTokens(data);
//   }
//
//   render() {
//     return (
//       <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
//         <Router>
//           <Route> <NavBar/> </Route>
//           <Switch>
//             <Route path="/login"><Login/></Route>
//             <Route path="/stores"><Stores/></Route>
//             <Route path="/about"><About/></Route>
//             <PrivateRoute path="/admin" comp={Admin}/>
//             <Route path="/signup"><Signup/></Route>
//             <Route exact path="/"><Home/></Route>
//           </Switch>
//         </Router>
//       </AuthContext.Provider>
//     );
//   }
// }

const App = () => {
  const existingTokens = localStorage.getItem("token");
  const [authTokens, setAuthTokens] = React.useState(existingTokens);
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <AuthContext.Provider value={{authTokens, setAuthTokens: setTokens}}>
      <Router>
        <Route> <NavBar/> </Route>
        <Switch>
          <Route path="/login" ><Login /></Route>
          <Route path="/stores" ><Stores /></Route>
          <Route path="/about"><About/></Route>
          <PrivateRoute path="/admin" comp={Admin}></PrivateRoute>
          <Route path="/signup"><SignUp /></Route>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/adduser"><AddUser /></Route>
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
