import React from "react";
import AccountsUIWrapper from "../../components/AccountsWrapper";
import "./style.css";
import { withTracker } from "meteor/react-meteor-data";
import { Redirect } from "react-router-dom";

const Login = props => {
  return props.currentUser && props.currentUserId ? (
    <Redirect to="/" />
  ) : (
    <div className="main-login">
      <AccountsUIWrapper className="login-page" />
    </div>
  );
};

const LoginContainer = withTracker(() => {
  Meteor.subscribe("users");
  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId()
  };
})(Login);

export default LoginContainer;
