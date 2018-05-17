import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import ScienceNatureQuestion from "../ui/containers/ScienceNatureQuestion";

const PrivateScience = (props, { component: Component, ...rest }) => {
  const currentUser = props.user;
  const currentUserId = props.userId;
  return (
    <Route
      {...rest}
      render={props =>
        currentUser && currentUserId ? (
          <ScienceNatureQuestion />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateScience;
