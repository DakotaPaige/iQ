import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Score from "../ui/containers/Score";

const PrivateScore = (props, { component: Component, ...rest }) => {
  const currentUser = props.user;
  const currentUserId = props.userId;
  return (
    <Route
      {...rest}
      render={props =>
        currentUser && currentUserId ? <Score /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateScore;
