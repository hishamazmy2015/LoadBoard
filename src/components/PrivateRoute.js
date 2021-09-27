import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { LoadUser } from "../actions/Auth";

const PrivateRoute = ({ component: Component, exact, path }) => {
  const user = useSelector((state) => state.auth);
  return (
    <div>
      <Route
        exact={exact}
        path={path}
        render={(props) =>
          user && user.isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { referrer: props.location },
              }}
            />
          )
        }
      />
    </div>
  );
};

export default PrivateRoute;
