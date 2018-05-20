import React from "react";
import "./style.css";
import Gravatar from "react-gravatar";

const TopThree = props => {
  return (
    <ul className="top-three">
      {props.topThree.map(user => {
        return (
          <li key={user.emails[0].address} className={"single-user"}>
            <div className="top-image">
              <Gravatar email={user.emails[0].address} />
            </div>
            <p>{user.username}</p>
            <p>{user.profile.points[props.currentIndex].points}</p>
            <p>{user.profile.gamesPlayed} Games</p>
            <p>
              {user.profile.gamesPlayed === 0
                ? 0
                : (
                    user.profile.points[4].points /
                    user.profile.gamesPlayed *
                    100
                  ).toFixed(2)}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default TopThree;
