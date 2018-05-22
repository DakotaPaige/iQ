import React, { Component } from "react";
import { Moment } from "moment";

class Messages extends Component {
  formatTime(time) {
    return moment(time).format("h:mm A");
  }

  render() {
    return (
      <li>
        {this.props.message.text} - {this.formatTime(this.props.message.time)}
      </li>
    );
  }
}

export default Messages;
