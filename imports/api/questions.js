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
  }
});

if (Meteor.isServer) {
  Meteor.publish("questions", function() {
    return Questions.find();
  });
}
export const Questions = new Mongo.Collection("questions");
