import React from "react";
import { Table } from "reactstrap";
import "./style.css";

const LeaderboardList = props => {
  let placement = 3;
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th>Points</th>
          <th>Games Played</th>
          <th>ELO</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map(user => {
          placement += 1;
          return (
            <tr>
              <th scope="row">{placement}</th>
              <td>{user.username}</td>
              <td>{user.profile.points[props.currentIndex].points}</td>
              <td>{user.profile.gamesPlayed}</td>
              <td>
                {user.profile.gamesPlayed === 0
                  ? 0
                  : (
                      user.profile.points[4].points /
                      user.profile.gamesPlayed *
                      100
                    ).toFixed(2)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default LeaderboardList;
