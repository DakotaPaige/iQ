import React, { Component } from "react";

class Messages extends Component {
  formatTime(time) {
    return moment(time).format("h:mm A");
  }

  render() {
    return (
      <li>
        {this.formatTime(this.props.message.time)} - {this.props.message.text}
      </li>
    );
  }
}

export default Messages;
