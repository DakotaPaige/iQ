import React, { Component } from "react";
import HomePage from "./HomePage";
import { withTracker } from "meteor/react-meteor-data";

class HomePageContainer extends Component {
  render() {
    return (
      <div>
        <HomePage
          currentUser={this.props.currentUser}
          currentUserId={this.props.currentUserId}
        />
      </div>
    );
  }
}

const TrackedHomePage = withTracker(() => {
  Meteor.subscribe("users");
  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId()
  };
})(HomePageContainer);

export default TrackedHomePage;
