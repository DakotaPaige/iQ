import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ComputerScienceQuestion from "../ui/containers/ComputerScienceQuestion";

const PrivateComputer = (props, { component: Component, ...rest }) => {
  const currentUser = props.user;
  const currentUserId = props.userId;
  return (
    <Route
      {...rest}
      render={props =>
        currentUser && currentUserId ? (
          <ComputerScienceQuestion />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateComputer;
