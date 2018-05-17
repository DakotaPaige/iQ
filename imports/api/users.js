import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";

export const Users = Meteor.users.find().fetch();

Meteor.methods({
  "users.plusScore"(category) {
    const currentUser = Meteor.user();
    const currentUserId = Meteor.userId();
    Meteor.users.update(
      { _id: currentUserId, "profile.points.category": "all" },
      {
        $inc: { "profile.points.4.points": 1 }
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
