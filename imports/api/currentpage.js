import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

const CurrentPage = new Mongo.Collection("currentpage");

if (Meteor.isServer) {
  Meteor.publish("currentpage", function() {
    // console.log(Meteor.users.find().fetch())
    return Meteor.CurrentPage.find();
  });
}

export default CurrentPage;
