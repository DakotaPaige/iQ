import React, {Component} from 'react';
import TopThree from '../../components/TopThree';
import LeaderboardList from '../../components/LeaderboardList';
import { Meteor } from 'meteor/meteor'
import './style.css';

Meteor.subscribe('userData');
const Users = Meteor.users.find().fetch();
console.log(Users);

const mockUserData = [
  {
    emails: [
      {
        address: 'cat@cats.com',
        verified: false
      }
    ],
    profile: {
      points: [
        {category: 'computer-science', points: 0},
        {category: 'film', points: 10},
        {category: 'general-knowledge', points: 7},
        {category: 'science-nature', points: 15},
        {category: 'all', points: 32}
      ],
      username: 'Cats'
    }
  },
  {
    emails: [
      {
        address: 'test@test.com',
        verified: false
      }
    ],
    profile: {
      points: [
        {category: 'computer-science', points: 5},
        {category: 'film', points: 5},
        {category: 'general-knowledge', points: 5},
        {category: 'science-nature', points: 5},
        {category: 'all', points: 20}
      ],
      username: 'Tester'
    }
  },
  {
    emails: [
      {
        address: 'blah@blah.com',
        verified: false
      }
    ],
    profile: {
      points: [
        {category: 'computer-science', points: 10},
        {category: 'film', points: 10},
        {category: 'general-knowledge', points: 10},
        {category: 'science-nature', points: 10},
        {category: 'all', points: 40}
      ],
      username: 'Hello!'
    }
  },
  {
    emails: [
      {
        address: 'user3@blah.com',
        verified: false
      }
    ],
    profile: {
      points: [
        {category: 'computer-science', points: 6},
        {category: 'film', points: 6},
        {category: 'general-knowledge', points: 6},
        {category: 'science-nature', points: 6},
        {category: 'all', points: 24}
      ],
      username: 'User3'
    }
  }
]

function compareAllPoints(a, b) {
  return a.profile.points[4].points - b.profile.points[4].points;
}

const sortedAllPoints = mockUserData.sort(compareAllPoints).reverse();

class Leaderboard extends Component {

  render() {
    return (
      <div>
        <h1>Top Scores</h1>
        <ul className='category-list'>
          <li>General</li>
          <li>Computers</li>
          <li>Sciences & Nature</li>
          <li>Film</li>
        </ul>
        <TopThree topThree={sortedAllPoints.slice(0, 3)}/>
        <LeaderboardList users={sortedAllPoints.slice(3)}/>
      </div>
    )
  }
}

export default Leaderboard;

// feed in just the top 3 user scores into TopThree
// feed in the rest to LeaderboardList
// the ul will have to be pulling from listed categories rather than hard-coded