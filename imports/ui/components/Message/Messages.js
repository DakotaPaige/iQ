import React, { Component } from "react";
import { Moment } from "moment";

class Messages extends Component {
  formatTime(time) {
    return moment(time).format("h:mm A");
  }

  render() {
    return (
      <li>
        <p style={{ margin: "0" }}>{this.props.message.text}</p>{" "}
        <p style={{ margin: "0" }}>
          {this.formatTime(this.props.message.time)}
        </p>
      </li>
    );
  }
}

export default Messages;
