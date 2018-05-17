import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "../ui/containers/HomePage";

const privateHome = (props, { component: Component, ...rest }) => {
  const currentUser = props.user;
  const currentUserId = props.userId;
  console.log(currentUser, currentUserId);
  return (
    <Route
      {...rest}
      render={props =>
        currentUserId ? <HomePage {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default privateHome;
