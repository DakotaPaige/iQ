import React, { Component } from "react";
import { Message } from "../../../api/messages";
import ReactDOM from "react-dom";
import Messages from "../../components/Message";

import TextField from "material-ui/TextField";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";

import "./style";

import { withTracker } from "meteor/react-meteor-data";

class MessageList extends Component {
  renderMessages() {
    return this.props.messages.map(message => {
      return <Messages key={message._id} message={message} />;
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
      <div className="chat-container">
        <TextField>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input
              type="text"
              ref="textInput"
              name="message"
              placeholder="Enter message..."
            />
          </form>
        </TextField>
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        <Card>
          \{" "}
          <div>
            <ul className="messages-container">{this.renderMessages()}</ul>
          </div>
          {this.renderForm()}
        </Card>
      </div>
    );
  }
}

const MessageListContainer = withTracker(() => {
  Meteor.subscribe("messages");
  return {
    messages: Message.find({}).fetch(),
    currentUser: Meteor.user()
  };
})(MessageList);

export default MessageListContainer;
