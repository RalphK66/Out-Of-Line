import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {getSession} from '../auth/get-session';

function PrivateRoute({comp: Component, ...rest}) {
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