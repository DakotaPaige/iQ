import React, { Component } from "react";
import { Message } from "../../../api/messages";
import ReactDOM from "react-dom";
import Messages from "../../components/Message";

import { withTracker } from "meteor/react-meteor-data";

class MessageList extends Component {
  renderMessages() {
    return this.props.messages.map(message => {
      <Messages key={message._id} message={message} />;
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    let messages = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    Meteor.call("addMessage", messages);

    ReactDOM.findDOMNode(this.refs.textInput).value = "";
  }

  renderForm() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          ref="textInput"
          name="message"
          placeholder="Enter message..."
        />
      </form>
    );
  }

  render() {
    return (
      <div className="container">
        <header>
          <h2>This is the Chat</h2>
        </header>

        {this.renderForm()}

        <ul>{this.renderMessages()}</ul>
      </div>
    );
  }
}

const MessageListContainer = withTracker(() => {
  Meteor.subscribe("message");
  return {
    messages: Message.find({}).fetch(),
    currentUser: Meteor.user()
  };
})(MessageList);

export default MessageListContainer;
