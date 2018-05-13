import React from 'react';

const LeaderboardList = (props) => {
  return (
    <ul>
      {props.users.map(user => {
        return <li key={user.emails[0].address}>{user.profile.username}</li>
      })}
    </ul>
  )
};

export default LeaderboardList;