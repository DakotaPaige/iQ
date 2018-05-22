import { Meteor } from "meteor/meteor";
import { Questions } from "../../api/questions";
import { Scores } from "../../api/scores";
import ShowResult from "../../api/showresult";
import { Users } from "../../api/users";
import { allQuestions } from "../../api/allquestions";

Meteor.startup(() => {
  if (ShowResult.find().count() === 0) {
    ShowResult.insert({
      showResultPage: false
    });
  }
});
