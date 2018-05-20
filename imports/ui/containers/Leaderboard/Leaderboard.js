import React, { Component } from "react";
import TopThree from "../../components/TopThree";
import LeaderboardList from "../../components/LeaderboardList";
import { Meteor } from "meteor/meteor";
import "./style.css";
import { Users } from "../../../api/users";
import { Button, ButtonGroup } from "reactstrap";
import { withTracker } from "meteor/react-meteor-data";

function compareAllPoints(a, b) {
  if (a.profile.gamesPlayed === 0 && b.profile.gamesPlayed === 0) {
    return a.profile.points[4].points - b.profile.points[4].points;
  } else if (a.profile.gamesPlayed === 0) {
    return 0 - b.profile.points[4].points / b.profile.gamesPlayed;
  } else if (b.profile.gamesPlayed === 0) {
    return a.profile.points[4].points / a.profile.gamesPlayed - 0;
  } else {
    return (
      a.profile.points[4].points / a.profile.gamesPlayed -
      b.profile.points[4].points / b.profile.gamesPlayed
    );
  }
}

function compareComputerPoints(a, b) {
  return a.profile.points[0].points - b.profile.points[0].points;
}

function compareFilmPoints(a, b) {
  return a.profile.points[1].points - b.profile.points[1].points;
}

function compareGeneralPoints(a, b) {
  return a.profile.points[2].points - b.profile.points[2].points;
}

function compareSciencePoints(a, b) {
  return a.profile.points[3].points - b.profile.points[3].points;
}

class Leaderboard extends Component {
  constructor() {
    super();
    this.state = {
      sortedUserData: [],
      currentIndex: 0,
      category: "All Time"
    };
  }

  componentDidMount() {
    const sortedAllPoints = this.props.users
      .sort(compareAllPoints)
      .slice()
      .reverse();
    this.setState({ sortedUserData: sortedAllPoints, currentIndex: 4 });
  }

  getAllTime = () => {
    const sortedAllPoints = this.props.users
      .sort(compareAllPoints)
      .slice()
      .reverse();
    this.setState({
      sortedUserData: sortedAllPoints,
      currentIndex: 4,
      category: "All Time"
    });
  };

  getFilm = () => {
    const sortedFilmPoints = this.props.users
      .sort(compareFilmPoints)
      .slice()
      .reverse();
    this.setState({
      sortedUserData: sortedFilmPoints,
      currentIndex: 1,
      category: "Film"
    });
  };

  getScience = () => {
    const sortedSciencePoints = this.props.users
      .sort(compareSciencePoints)
      .slice()
      .reverse();
    this.setState({
      sortedUserData: sortedSciencePoints,
      currentIndex: 3,
      category: "Science & Nature"
    });
  };

  getGeneral = () => {
    const sortedGeneralPoints = this.props.users
      .sort(compareGeneralPoints)
      .slice()
      .reverse();
    this.setState({
      sortedUserData: sortedGeneralPoints,
      currentIndex: 2,
      category: "General Knowledge"
    });
  };

  getComputers = () => {
    const sortedComputerPoints = this.props.users
      .sort(compareComputerPoints)
      .slice()
      .reverse();
    this.setState({
      sortedUserData: sortedComputerPoints,
      currentIndex: 0,
      category: "Computer Science"
    });
  };

  render() {
    return (
      <div>
        <h1>Top Scores</h1>
        <h2 className="category-title">{this.state.category}</h2>
        <ButtonGroup>
          <Button
            onClick={this.getAllTime}
            className="leader-cat"
            color="primary"
          >
            All Time
          </Button>
          <Button
            onClick={this.getGeneral}
            className="leader-cat"
            color="primary"
          >
            General
          </Button>
          <Button
            onClick={this.getComputers}
            className="leader-cat"
            color="primary"
          >
            Computers
          </Button>
          <Button
            onClick={this.getScience}
            className="leader-cat"
            color="primary"
          >
            Science & Nature
          </Button>
          <Button onClick={this.getFilm} className="leader-cat" color="primary">
            Film
          </Button>
        </ButtonGroup>
        <TopThree
          topThree={this.state.sortedUserData.slice(0, 3)}
          currentIndex={this.state.currentIndex}
        />
        <LeaderboardList
          users={this.state.sortedUserData.slice(3)}
          currentIndex={this.state.currentIndex}
        />
      </div>
    );
  }
}

const LeaderboardContainer = withTracker(() => {
  Meteor.subscribe("users");
  return {
    users: Meteor.users.find().fetch()
  };
})(Leaderboard);

export default LeaderboardContainer;

// feed in just the top 3 user scores into TopThree
// feed in the rest to LeaderboardList
// the ul will have to be pulling from listed categories rather than hard-coded
