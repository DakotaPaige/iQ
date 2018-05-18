import React, { Component } from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";
import { Template } from "meteor/templating";
import { Blaze } from "meteor/blaze";
import "./style.css";

class AccountsUIWrapper extends Component {
  componentDidMount() {
    // Use Meteor Blaze to render login buttons
    this.view = Blaze.render(
      Template.loginButtons,
      ReactDOM.findDOMNode(this.refs.container)
    );
  }
  componentWillUnmount() {
    Blaze.remove(this.view); // Clean up Blaze view
  }
  render() {
    console.log("COMING FROM ACCOUNTSWRAPPER:", this.props.location);
    if (this.props.location.pathname !== "/login") {
      return <span ref="container" />; // Render a placeholder
    } else {
      return <p>None</p>;
    }
  }
}

export default withRouter(AccountsUIWrapper);

// const loginButton = document.getElementById("root");
// console.log(loginButton);
// loginButton.onclick(function() {
//   console.log("clicked");
// });

// loginButton.map(button => {
//   button.onClick(function() {
//     const loginDropdown = document.getElementById("login-dropdown-list");
//     loginDropdown.hide();
//   });
// });
