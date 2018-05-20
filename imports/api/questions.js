import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

Meteor.methods({
  "questions.addQuestions"(questions) {
    Questions.insert({
      category: questions.category,
      question: questions.question,
      correct: questions.correct_answer,
      incorrect: questions.incorrect_answers,
      difficulty: questions.difficulty,
      correctscore: 0,
      path: "/"
    });
  },
  "questions.dropData"() {
    Questions.remove({});
  },
  "questions.addScore"(question) {
    // console.log("its adding");
    Questions.update(
      { correct: question.correct_answer },
      {
        $inc: { correctscore: 1 }
      }
    );
  },
  "questions.addRouteComputer"(category) {
    Questions.update(
      { category: category },
      {
        $set: { path: "/Computer-Science" }
      }
    );
  },
  "questions.addRouteFilm"(category) {
    Questions.update(
      { category: category },
      {
        $set: { path: "/Film" }
      }
    );
  },
  "questions.addRouteGK"(category) {
    Questions.update(
      { category: category },
      {
        $set: { path: "/General-Knowledge" }
      }
    );
  },
  "questions.addRouteSN"(category) {
    Questions.update(
      { category: category },
      {
        $set: { path: "/Science-Nature" }
      }
    );
  }
});

if (Meteor.isServer) {
  Meteor.publish("questions", function() {
    return Questions.find();
  });
}
export const Questions = new Mongo.Collection("questions");
