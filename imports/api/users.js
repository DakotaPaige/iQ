import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";

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
export const Users = Meteor.users.find().fetch();
// console.log(Users);
