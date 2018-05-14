import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const userData = new Mongo.Collection('users');

if (Meteor.isServer) {
  Meteor.publish('userData', function userData() {
      return Meteor.users.find({});
  });
}