import React, { Component } from "react";
import TopThree from "../../components/TopThree";
import LeaderboardList from "../../components/LeaderboardList";
import { Meteor } from "meteor/meteor";
import "./style.css";
import { Users } from "../../../api/users";
import { Button, ButtonGroup } from 'reactstrap';

// const mockUserData = [
//   {
//     emails: [
//       {
//         address: 'cat@cats.com',
//         verified: false
//       }
//     ],
//     profile: {
//       points: [
//         {category: 'computer-science', points: 0},
//         {category: 'film', points: 10},
//         {category: 'general-knowledge', points: 7},
//         {category: 'science-nature', points: 15},
//         {category: 'all', points: 32}
//       ],
//       username: 'Cats'
//     }
//   },
//   {
//     emails: [
//       {
//         address: 'test@test.com',
//         verified: false
//       }
//     ],
//     profile: {
//       points: [
//         {category: 'computer-science', points: 5},
//         {category: 'film', points: 5},
//         {category: 'general-knowledge', points: 5},
//         {category: 'science-nature', points: 5},
//         {category: 'all', points: 20}
//       ],
//       username: 'Tester'
//     }
//   },
//   {
//     emails: [
//       {
//         address: 'blah@blah.com',
//         verified: false
//       }
//     ],
//     profile: {
//       points: [
//         {category: 'computer-science', points: 10},
//         {category: 'film', points: 10},
//         {category: 'general-knowledge', points: 10},
//         {category: 'science-nature', points: 10},
//         {category: 'all', points: 40}
//       ],
//       username: 'Hello!'
//     }
//   },
//   {
//     emails: [
//       {
//         address: 'user3@blah.com',
//         verified: false
//       }
//     ],
//     profile: {
//       points: [
//         {category: 'computer-science', points: 6},
//         {category: 'film', points: 6},
//         {category: 'general-knowledge', points: 6},
//         {category: 'science-nature', points: 6},
//         {category: 'all', points: 24}
//       ],
//       username: 'User3'
//     }
//   }
// ]

function compareAllPoints(a, b) {
  return (a.profile.points[4].points/a.profile.gamesPlayed) - (b.profile.points[4].points/b.profile.gamesPlayed);
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

// const sortedAllPoints = mockUserData.sort(compareAllPoints).slice().reverse();
// const sortedComputerPoints = mockUserData.sort(compareComputerPoints).slice().reverse();
// const sortedFilmPoints = mockUserData.sort(compareFilmPoints).slice().reverse();
// const sortedGeneralPoints = mockUserData.sort(compareGeneralPoints).slice().reverse();
// const sortedSciencePoints = mockUserData.sort(compareSciencePoints).slice().reverse();

// console.log('this is sorted all:', sortedAllPoints);
// console.log('This is sorted Computer: ', sortedComputerPoints);
// console.log('This is sorted Film: ', sortedFilmPoints);
// console.log('This is sorted General: ', sortedGeneralPoints);
// console.log('This is sorted Science: ', sortedSciencePoints);

class Leaderboard extends Component {
  constructor() {
    super();
    this.state = {
      sortedUserData: [],
      currentIndex: 0
    };
  }

  getAllTime = () => {
    const sortedAllPoints = this.props.allUsers
      .sort(compareAllPoints)
      .slice()
      .reverse();
    this.setState({ sortedUserData: sortedAllPoints, currentIndex: 4 });
  };

  getFilm = () => {
    const sortedFilmPoints = this.props.allUsers
      .sort(compareFilmPoints)
      .slice()
      .reverse();
    this.setState({ sortedUserData: sortedFilmPoints, currentIndex: 1 });
  };

  getScience = () => {
    const sortedSciencePoints = this.props.allUsers
      .sort(compareSciencePoints)
      .slice()
      .reverse();
    this.setState({ sortedUserData: sortedSciencePoints, currentIndex: 3 });
  };

  getGeneral = () => {
    const sortedGeneralPoints = this.props.allUsers
      .sort(compareGeneralPoints)
      .slice()
      .reverse();
    this.setState({ sortedUserData: sortedGeneralPoints, currentIndex: 2 });
  };

  getComputers = () => {
    const sortedComputerPoints = this.props.allUsers
      .sort(compareComputerPoints)
      .slice()
      .reverse();
    this.setState({ sortedUserData: sortedComputerPoints, currentIndex: 0 });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Top Scores</h1>
        <ButtonGroup>
            <Button onClick={this.getAllTime} className="leader-cat">
              All Time
            </Button>
            <Button onClick={this.getGeneral} className="leader-cat">
              General
            </Button>
            <Button onClick={this.getComputers} className="leader-cat">
              Computers
            </Button>
            <Button onClick={this.getScience} className="leader-cat">
              Science & Nature
            </Button>
            <Button onClick={this.getFilm} className="leader-cat">
              Film
            </Button>
        </ButtonGroup>
        <TopThree topThree={this.state.sortedUserData.slice(0, 3)} currentIndex={this.state.currentIndex}/>
        <LeaderboardList users={this.state.sortedUserData.slice(3)} currentIndex={this.state.currentIndex}/>
      </div>
    );
  }
}

export default Leaderboard;

// feed in just the top 3 user scores into TopThree
// feed in the rest to LeaderboardList
// the ul will have to be pulling from listed categories rather than hard-coded
