import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "../ui/containers/HomePage";
import FilmQuestion from "../ui/containers/FilmQuestion";
import GeneralKQuestion from "../ui/containers/GeneralKQuestion";
import ComputerScienceQuestion from "../ui/containers/ComputerScienceQuestion";
import ScienceNatureQuestion from "../ui/containers/ScienceNatureQuestion";
import Score from "../ui/containers/Score";
import Leaderboard from "../ui/containers/Leaderboard";

const Routes = props => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route
        exact
        path="/Computer-Science"
        component={ComputerScienceQuestion}
        // render={() => console.log("hello")}
      />
      <Route exact path="/Film" component={FilmQuestion} />
      <Route exact path="/General-Knowledge" component={GeneralKQuestion} />
      <Route exact path="/Science-Nature" component={ScienceNatureQuestion} />
      <Route exact path="/Score" component={Score} />
      <Route exact path="/Leaderboard" render={props => <Leaderboard />} />
    </Switch>
  );
};

export default Routes;
