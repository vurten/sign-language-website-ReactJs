import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { fakeAuth } from './Connexion';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const location = useLocation();
  
    return (
      <Route {...rest}>
        {fakeAuth.isAuthenticated === true ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: "/settings", state: { from: location } }} />
        )}
      </Route>
    );
  };

export default ProtectedRoute;
