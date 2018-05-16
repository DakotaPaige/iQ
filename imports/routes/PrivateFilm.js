import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import FilmQuestion from "../ui/containers/FilmQuestion";

const PrivateFilm = (props, { component: Component, ...rest }) => {
  const currentUser = props.user;
  const currentUserId = props.userId;
  return (
    <Route
      {...rest}
      render={props =>
        currentUser && currentUserId ? <FilmQuestion /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateFilm;
