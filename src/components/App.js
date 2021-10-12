import React, { Component } from "react";
import { Provider } from "react-redux";
import { Route, Router, Switch } from "react-router";
import Dashboard from "./Dashboard";
import Tweets from "./Tweets";
import store from "../reducer/store";
import NavBar from "./NavBar";
import QuestionComponent from "./QuestionComponent";
import PrivateRoute from "./PrivateRoute";
import Login from "./Login";
import LoaderBoard from "./LoaderBoard";
import AnswerQuestion from "./AnswerQuestion";
import ShowResult from "./ShowResult";
import Page404 from './Page404'

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <NavBar />
        <Switch>
          {/* <privateRoute component={}  /> */}
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/loaderboard" component={LoaderBoard} />
          <PrivateRoute exact path="/add" component={QuestionComponent} />
          <Route exact path="/question/:questionId" component={AnswerQuestion} />
          <Route exact path="/user/showResult/:questionId" component={ShowResult} />
          <PrivateRoute component={Page404} />

          logout
          {/* <Route exact path="/tweets" component={Tweets} /> */}
        </Switch>
      </div>
    </Provider>
  );
};

export default App;
