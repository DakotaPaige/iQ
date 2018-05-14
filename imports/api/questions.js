import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

Meteor.methods({
  "questions.addQuestions"(questions) {
    Questions.insert({
      category: questions.category,
      question: questions.question,
      correct: questions.correct_answer,
      incorrect: questions.incorrect_answers,
      difficulty: questions.difficulty
    });
  }
});

export const Questions = new Mongo.Collection("questions");
