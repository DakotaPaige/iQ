import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";

Meteor.methods({
  //check
  "scores.addScore"(newScore) {
    Scores.insert(newScore);
  },
  //ask
  "scores.setScore"(score) {
    Scores.update(scores._id, {
      $inc: { points: 1 }
    });
  }
});

export const Scores = new Mongo.Collection("scores");

//when you click ont he game it should be add new plyer with the score and user id
//then when u press on the scores it shoud update + 1
