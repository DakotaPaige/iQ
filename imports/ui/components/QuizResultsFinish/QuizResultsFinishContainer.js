import React from "react";
import ComputerScienceContainer from "../../containers/ComputerScienceQuestion";
import { Questions } from "../../../api/questions";
import { Meteor } from "meteor/meteor";
import { Scores } from "../../../api/scores";
import { Mongo } from "meteor/mongo";
import { withTracker } from "meteor/react-meteor-data";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ScoreContainer from "../../containers/Score";
import "./styles.css";
import { PieChart, Pie, Sector, Cell } from "recharts";

//why
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

const QuestionFinish = props => {
  console.log(props);
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
    { name: "Won", value: percentageWon },
    { name: "Loss", value: percentageLoss }
  ];
  const COLORS = ["#0088FE", "#00C49F"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div>
      {props.isCorrectAnswer == true ? (
        <div>
          <h1>Good Job</h1>
          <div class="colorcontainer">
            <div class="colorbox correct">Correct.</div>
            <div class="colorbox wrong">Wrong.</div>
          </div>
          <div className="piechart">
            <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
              <Pie
                data={data}
                cx={300}
                cy={200}
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={100}
                fill="#8884d8"
              >
                {data.map((entry, index) => (
                  <Cell fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </div>
        </div>
      ) : (
        <div>
          <h1>Wrong!</h1>
          <h1>The correct answer is</h1>
          <h1 className="answer">
            {decodeEntities(props.questionAnswer.correct)}
          </h1>
          <div class="colorcontainer">
            <div class="colorbox correct">Correct.</div>
            <div class="colorbox wrong">Wrong</div>
          </div>
          <div className="piechart">
            <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
              <Pie
                data={data}
                cx={300}
                cy={200}
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={100}
                fill="#8884d8"
              >
                {data.map((entry, index) => (
                  <Cell fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </div>
        </div>
      )}
      <Link to="/Score">
        <button onClick={props.showQuestions}> click here</button>
      </Link>
    </div>
  );
};

export default QuestionFinish;
