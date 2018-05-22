import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

export const allQuestions = new Mongo.Collection("allquestions");

if (Meteor.isServer) {
  Meteor.publish("allquestions", function() {
    return allQuestions.find();
  });
}

Meteor.methods({
  "allquestions.addAllQuestions"(allOfTheQuestions) {
    allQuestions.insert(allOfTheQuestions);
  }
});
