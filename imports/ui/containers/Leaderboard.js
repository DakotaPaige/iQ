import React, {Component} from 'react';
import TopThree from '../components/TopThree';
import LeaderboardList from '../components/LeaderboardList';

class Leaderboard extends Component {
  render() {
    return (
      <div>
        <h1>Top Scores</h1>
        <ul>
          <li>General</li>
          <li>Computers</li>
          <li>Sciences & Nature</li>
          <li>Film</li>
        </ul>
        <TopThree />
        <LeaderboardList />
      </div>
    )
  }
}

// feed in just the top 3 user scores into TopThree
// feed in the rest to LeaderboardList
// the ul will have to be pulling from listed categories rather than hard-coded