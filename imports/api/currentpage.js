import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

const CurrentPage = new Mongo.Collection("currentpage");

if (Meteor.isServer) {
  Meteor.publish("currentpage", function() {
    // console.log(Meteor.users.find().fetch())
    return Meteor.CurrentPage.find();
  });
}

Meteor.methods({
  // method that takes in page-slug as a variable and updates the collection with it for path
  "currentpage.changePage"(question) {
    CurrentPage.insert({
      question: question
    });
  }

  //method that tracks the currentQuestionStatus for how many users got it right or wrong (to ultimately display pie chart)
});

export default CurrentPage;
