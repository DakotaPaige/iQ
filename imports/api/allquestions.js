import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

export const allQuestions = new Mongo.Collection("allquestions");

Meteor.methods({
  "allquestions.addAllQuestions"(allOfTheQuestions) {
    allQuestions.insert(allOfTheQuestions);
  },
  "allquestions.dropData"() {
    allQuestions.remove({});
  }
});

if (Meteor.isServer) {
  Meteor.publish("allquestions", function() {
    return allQuestions.find();
  });
}
