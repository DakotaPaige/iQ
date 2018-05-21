import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

const ShowResult = new Mongo.Collection("showresult");

if (Meteor.isServer) {
  Meteor.publish("showresult", function() {
    // console.log(Meteor.users.find().fetch())
    return Meteor.ShowResult.find();
  });
}

Meteor.methods({
  // method that takes in page-slug as a variable and updates the collection with it for path
  "showresult.insertBoolean"() {
    ShowResult.insert({ showResult: false });
  },
  "showresult.insertUnboolean"(boolean) {
    ShowResult.update(
      { showResult: boolean },
      { $set: { showResult: !boolean } }
    );
  },
  "showresult.setTrue"(boolean) {
    ShowResult.update(
      { showResult: boolean },
      { $set: { showResult: !boolean } }
    );
  }
  // "showresult.dropData"() {
  //   ShowResult.remove({});
  // }

  //method that tracks the currentQuestionStatus for how many users got it right or wrong (to ultimately display pie chart)
});

export default ShowResult;
