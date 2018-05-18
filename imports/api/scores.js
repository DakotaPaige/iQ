import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
Meteor.methods({
  //check
  "scores.addScore"() {
    Scores.insert({ name: Meteor.user(), points: 0 });
  },
  //ask
  "scores.plusScore"() {
    // console.log("its adding");
    Scores.update(
      { name: Meteor.user() },
      {
        $inc: { points: 1 }
      }
    );
  },
  "scores.sameScore"() {
    // console.log("its not adding");
    Scores.update(
      { name: Meteor.user() },
      {
        $inc: { points: 0 }
      }
    );
  },
  "scores.dropData"() {
    console.log("its dropped");
    Scores.remove({});
  }
});

if (Meteor.isServer) {
  Meteor.publish("scores", function() {
    return Scores.find();
  });
}

export const Scores = new Mongo.Collection("scores");

//when you click ont he game it should be add new plyer with the score and user id
//then when u press on the scores it shoud update + 1
