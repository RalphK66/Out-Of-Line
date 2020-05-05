import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Stores from "./html-pages/grocery-stores"
import Login from "./html-pages/login"
import Home from "./html-pages/landing-page"
import Admin from "./html-pages/store-admin"
import SignUp from "./html-pages/sign-up"
import NavBar from "./html-pages/Navbar"


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
//   render() {
//     return (
//       <Router>
//         <Switch>
//           <Route path="/login"><Login/></Route>
//           <Route path="/stores"><Stores/></Route>
//           <Route path="/admin"><Admin/></Route>
//           <Route exact path="/"><Home/></Route>
//         </Switch>
//       </Router>
//     );
    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo"/>
    //       <h1 className="App-title">Welcome to React</h1>
    //     </header>
    //     <p className="App-intro">{this.state.apiResponse}</p>
    //   </div>
    //  );
//   }
// }

class App extends Component {
  render() {

  
  return (
    
    <Router>   
    <div>
    <NavBar />
    </div>
      <Switch>
        <Route path="/login" ><Login /></Route>
        <Route path="/stores" ><Stores /></Route>
        <Route path="/admin" ><Admin /></Route>
        <Route path="/signup"><SignUp /></Route>
        <Route exact path="/" ><Home /></Route>
      </Switch>
    </Router>
    
  );
  }
}

export default App;