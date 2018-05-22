import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

export const Message = new Mongo.Collection("messages");

Meteor.methods({
  addMessage(text) {
    let message = {
      time: new Date(),
      text: text
    };

    Message.insert(message);
  }
});

if (Meteor.isServer) {
  Meteor.publish("messages", function publishMessages() {
    return Message.find();
  });
}
