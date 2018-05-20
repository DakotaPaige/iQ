import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import "./style.css";

const LoggedInUsers = props => {
  console.log(props.users);
  let numberOfLoggedIn = 0;
  if (props.users) {
    numberOfLoggedIn = props.users.filter(user => user.status.online).length;
    console.log(numberOfLoggedIn);
  }
  return (
    <div className="logged-in-users">
      <p>
        <i className="fas fa-user" /> {numberOfLoggedIn}
      </p>
    </div>
  );
};

const LoggedInUsersContainer = withTracker(() => {
  Meteor.subscribe("users");
  return {
    users: Meteor.users.find().fetch()
  };
})(LoggedInUsers);

export default LoggedInUsersContainer;
