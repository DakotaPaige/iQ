import React, { Component } from "react";
import ScoreC from "./Score";

class ScoreContainer extends Component {
  constructor() {
    super();
    this.state = {
      score: 0
    };
  }
  render() {
    return (
      <div>
        <ScoreC />
      </div>
    );
  }
}

export default ScoreContainer;
