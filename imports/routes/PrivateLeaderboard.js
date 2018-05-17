import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Leaderboard from "../ui/containers/Leaderboard";

const PrivateLeaderboard = (props, { component: Component, ...rest }) => {
  const currentUser = props.user;
  const currentUserId = props.userId;
  return (
    <Route
      {...rest}
      render={props =>
        currentUser && currentUserId ? (
          <Leaderboard {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateLeaderboard;
