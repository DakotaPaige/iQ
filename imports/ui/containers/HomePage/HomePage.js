import React from "react";
import MainMenu from "../../components/MainMenu";
import TextLoop from "react-text-loop";
import { withTracker } from "meteor/react-meteor-data";
import { Questions } from "../../../api/questions";
import { BrowserRouter, Link, withRouter } from "react-router-dom";
import history from "../../../history";

const HomePage = props => {
  console.log(window.location);
  return props.currentUser && props.currentUser.profile.superuser ? (
    <div>
      <MainMenu />
    </div>
  ) : (
    <div>
      {props.questionAnswer && props.questionAnswer.path !== "/"
        ? props.currentUser &&
          props.currentUser.profile.hasOwnProperty("superuser")
          ? null
          : props.history &&
            props.history.push(
              `/${props.questionAnswer && props.questionAnswer.path}`
            )
        : null}
      <h1 className="textloop">
        <TextLoop>
          <div>Have Fun!</div>
          <div>Stay Smart.</div>
          <div>Be Competitive.</div>
          <div>Dont Cheat!</div>
        </TextLoop>
      </h1>
      <button type="button" value="Leaderboard" className="btn btn-primary">
        <Link to="/Leaderboard">Leaderboard</Link>
      </button>
    </div>
  );
};

const HomePageContainer = withTracker(() => {
  Meteor.subscribe("users");
  Meteor.subscribe("questions");
  return {
    currentUser: Meteor.user(),
    users: Meteor.users.find().fetch(),
    questionAnswer: Questions.findOne()
  };
})(HomePage);

export default HomePageContainer;
