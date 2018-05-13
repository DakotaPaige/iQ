import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

export const Questions = new Mongo.Collection("questions");
