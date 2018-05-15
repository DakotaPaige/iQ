import React from 'react';
import { Table } from 'reactstrap';

const LeaderboardList = (props) => {
  let placement = 3;
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th>Points</th>
          <th>Games Played</th>
        </tr>
      </thead>
      <tbody>
      {props.users.map(user => {
        placement+=1;
        return (
          <tr>
            <th scope="row">{placement}</th>
            <td>{user.profile.username}</td>
            <td>{user.profile.points[props.currentIndex].points}</td> 
            <td>{user.profile.gamesPlayed}</td>
          </tr>)
      })}
      </tbody>
    </Table>
  )
};

export default LeaderboardList;