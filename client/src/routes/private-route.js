import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {getSession} from '../auth/get-session';
// import {useAuth} from "../context/auth";

function PrivateRoute({comp: Component, ...rest}) {
  // const { authTokens } = useAuth();
  // console.log(authTokens);

  return (
    <Route
      {...rest}
      render={props =>
         getSession() ? (<Component {...props} />) : (<Redirect to="/login"/>)
      }
    />
  );
}

export default PrivateRoute;