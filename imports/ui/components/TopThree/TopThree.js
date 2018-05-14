import React from 'react';
import './style.css';
import Gravatar from 'react-gravatar'

const TopThree = (props) => {
  return (
    <ul className='top-three'>
      {props.topThree.map(user => {
        return <li key={user.emails[0].address} className={'single-user'}><Gravatar email={user.emails[0].address} />{user.profile.username} {user.profile.points[props.currentIndex].points}</li>;
      })}
    </ul>
  )
};

export default TopThree;