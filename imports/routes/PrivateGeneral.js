import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import GeneralKQuestion from "../ui/containers/GeneralKQuestion";

const PrivateGeneral = (props, { component: Component, ...rest }) => {
  const currentUser = props.user;
  const currentUserId = props.userId;
  return (
    <Route
      {...rest}
      render={props =>
        currentUser && currentUserId ? (
          <GeneralKQuestion />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateGeneral;
