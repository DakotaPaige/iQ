import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

Meteor.methods({
  "questions.addQuestions"(questions) {
    Questions.insert({
      current: 0,
      category: questions.category,
      question: questions.question,
      correct: questions.correct_answer,
      incorrect: questions.incorrect_answers,
      difficulty: questions.difficulty
    });
  },
  "questions.dropData"() {
    Questions.remove({});
  }
});

if (Meteor.isServer) {
  Meteor.publish("questions", function() {
    return Questions.find();
  });
}
export const Questions = new Mongo.Collection("questions");
