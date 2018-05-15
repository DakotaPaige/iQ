import React from 'react';
import './style.css';
import Gravatar from 'react-gravatar'

const TopThree = (props) => {
  return (
    <ul className='top-three'>
      {props.topThree.map(user => {
        return (
          <li key={user.emails[0].address} className={'single-user'}>
            <Gravatar email={user.emails[0].address} />
            <p>{user.profile.username}</p>
            <p>{user.profile.points[props.currentIndex].points}</p>
            <p>{user.profile.gamesPlayed} Games</p>
          </li>);
      })}
    </ul>
  )
};

export default TopThree;