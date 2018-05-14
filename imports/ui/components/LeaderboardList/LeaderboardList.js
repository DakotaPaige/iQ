import React from 'react';

const LeaderboardList = (props) => {
  return (
    <ul>
      {props.users.map(user => {
        return <li key={user.emails[0].address}>{user.profile.username} {user.profile.points[props.currentIndex].points}</li>
      })}
    </ul>
  )
};

export default LeaderboardList;