import React from "react";
import { Table } from "reactstrap";
import "./style.css";

const LeaderboardList = props => {
  let placement = 3;
  return (
    <Table>
      <thead>
        <tr>
          <th className="rank">#</th>
          <th className="username">Username</th>
          <th className="points">Points</th>
          <th className="games-played">Games Played</th>
          <th className="elo">ELO</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map(user => {
          placement += 1;
          return (
            <tr>
              <th scope="row">{placement}</th>
              <td className="username">{user.username}</td>
              <td className="points">
                {user.profile.points[props.currentIndex].points}
              </td>
              <td className="games-played">{user.profile.gamesPlayed}</td>
              <td className="elo">
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
