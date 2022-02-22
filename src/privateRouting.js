import React from "react";
import { Route,Navigate } from "react-router-dom";

const PrivateRouting = ({ component: Component, path, ...rest }) => {
  return (
    <Route
      path={path}
      {...rest}
      render={(props) =>
        localStorage.getItem("userType") ? (
          <Component {...props} />
        ) : (
          <Navigate to="/" />
        )
      }
    />
  );
};

export default PrivateRouting;
