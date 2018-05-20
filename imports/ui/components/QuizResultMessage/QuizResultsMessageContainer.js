import React from "react";
import ComputerScienceContainer from "../../containers/ComputerScienceQuestion";
import { Questions } from "../../../api/questions";
import { Meteor } from "meteor/meteor";
import { Scores } from "../../../api/scores";
import { Mongo } from "meteor/mongo";
import { withTracker } from "meteor/react-meteor-data";
import "./styles.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

let decodeEntities = encodedString => {
  var translate_re = /&(nbsp|amp|quot|lt|gt);/g;
  var translate = {
    nbsp: " ",
    amp: "&",
    quot: '"',
    lt: "<",
    gt: ">"
  };
  return encodedString
    .replace(translate_re, function(match, entity) {
      return translate[entity];
    })
    .replace(/&#(\d+);/gi, function(match, numStr) {
      var num = parseInt(numStr, 10);
      return String.fromCharCode(num);
    });
};

const QuestionResult = props => {
  let numberOfLoggedIn = 0;
  if (props.users && props.users) {
    numberOfLoggedIn = props.users.filter(user => user.status.online).length;
  }
  let percentageWon =
    props.questionAnswer.correctscore / numberOfLoggedIn * 100;
  let percentageLoss =
    (numberOfLoggedIn - props.questionAnswer.correctscore) /
    numberOfLoggedIn *
    100;
  console.log(percentageWon);
  const data = [
    { name: "Won", uv: percentageWon },
    { name: "Loss", uv: percentageLoss }
  ];
  return (
    <div>
      {props.isCorrectAnswer == true ? (
        <div>
          <h1>Good Job</h1>
          {/* {console.log(props.numberofusers)} */}
          <BarChart
            width={600}
            height={300}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </div>
      ) : (
        <div>
          <h1>Wrong!</h1>
          <h1>The correct answer is</h1>
          <h1 className="answer">
            {decodeEntities(props.questionAnswer.correct)}
            {/* {console.log(props.numberofusers)} */}
          </h1>
          <BarChart
            width={600}
            height={300}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </div>
      )}
      <button onClick={props.showQuestions}> click here</button>
    </div>
  );
};

export default QuestionResult;
