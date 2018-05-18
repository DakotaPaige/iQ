import React from "react";

const HomePage = props => {
  return props.currentUser && props.currentUser.profile.superuser ? (
    <div>
      <h1>Home Page </h1>
    </div>
  ) : (
    <p>YOURE NOT THE SUPER USER</p>
  );
};

export default HomePage;
