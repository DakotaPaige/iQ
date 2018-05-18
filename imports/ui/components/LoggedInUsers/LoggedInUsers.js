import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";

const LoggedInUsers = props => {
  console.log(props.users);
  const numberOfLoggedIn = props.users.filter(user => user.status.online)
    .length;
  console.log(numberOfLoggedIn);
  return <p>LoggedIn: {numberOfLoggedIn}</p>;
};

const LoggedInUsersContainer = withTracker(() => {
  Meteor.subscribe("users");
  return {
    users: Meteor.users.find().fetch()
  };
})(LoggedInUsers);

export default LoggedInUsersContainer;
