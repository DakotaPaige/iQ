import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";

if (Meteor.isServer) {
  Meteor.publish("users", function() {
    return Meteor.users.find({}, { fields: { profile: 1 } });
  });
}
// Meteor.methods({
//   'users.getUsers'() {
//     Meteor.users.find().fetch()
//   }
// })

export const Users = Meteor.users.find({}).fetch();
