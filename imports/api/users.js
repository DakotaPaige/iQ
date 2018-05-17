import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";

export const Users = Meteor.users.find().fetch();

Meteor.methods({
  "users.plusAllScore"() {
    const currentUserId = Meteor.userId();
    Meteor.users.update(
      { _id: currentUserId },
      {
        $inc: { "profile.points.4.points": 1 }
      }
    );
  },
  "users.plusComputerScore"() {
    const currentUserId = Meteor.userId();
    Meteor.users.update(
      { _id: currentUserId },
      {
        $inc: { "profile.points.0.points": 1 }
      }
    );
  },
  "users.plusFilmScore"() {
    const currentUserId = Meteor.userId();
    Meteor.users.update(
      { _id: currentUserId },
      {
        $inc: { "profile.points.1.points": 1 }
      }
    );
  },
  "users.plusGeneralScore"() {
    const currentUserId = Meteor.userId();
    Meteor.users.update(
      { _id: currentUserId },
      {
        $inc: { "profile.points.2.points": 1 }
      }
    );
  },
  "users.plusScienceScore"() {
    const currentUserId = Meteor.userId();
    Meteor.users.update(
      { _id: currentUserId },
      {
        $inc: { "profile.points.3.points": 1 }
      }
    );
  }
});

if (Meteor.isServer) {
  Meteor.publish("users", function() {
    // console.log(Meteor.users.find().fetch())
    return Meteor.users.find();
  });
}
// Meteor.methods({
//   'users.getUsers'() {
//     Meteor.users.find().fetch()
//   }
// })
// console.log(Users);
