import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

const QuizResults = new Mongo.Collection("quizresults");

Meteor.methods({
  "quizresults.dropData"() {
    QuizResults.remove({});
  }
});

export default QuizResults;
