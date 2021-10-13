import React from "react";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router";
import store from "../reducer/store";
import AnswerQuestion from "./AnswerQuestion";
import Dashboard from "./Dashboard";
import LoaderBoard from "./LoaderBoard";
import Login from "./Login";
import NavBar from "./NavBar";
import Page404 from './Page404';
import PrivateRoute from "./PrivateRoute";
import QuestionComponent from "./QuestionComponent";
import ShowResult from "./ShowResult";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <NavBar />
        <Switch>
          {/* <privateRoute component={}  /> */}
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/leaderboard" component={LoaderBoard} />
          <PrivateRoute exact path="/add" component={QuestionComponent} />
          <PrivateRoute exact path="/question/:questionId" component={AnswerQuestion} />
          <PrivateRoute exact path="/questions/:questionId" component={ShowResult} />
          <Route  component={Page404} />

          logout
          {/* <Route exact path="/tweets" component={Tweets} /> */}
        </Switch>
      </div>
    </Provider>
  );
};

export default App;
