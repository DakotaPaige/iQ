import React from 'react';
import './style.css';

const TopThree = (props) => {
  return (
    <ul className='top-three'>
      {props.topThree.map(user => {
        return <li key={user.emails[0].address}>{user.profile.username}</li>
      })}
    </ul>
  )
};

export default TopThree;