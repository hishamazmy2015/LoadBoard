import { combineReducers } from "redux";

import LoadTweets from "./reducerComponent/LoadTweet";
import usersReducer from "./reducerComponent/usersReducer";
import saveAuthentication from './reducerComponent/saveAuthentication'
import QuestionReducer from './reducerComponent/QuestionReducer'

const rootReducer = combineReducers({
  tweets: LoadTweets,
  users: usersReducer,
  auth: saveAuthentication,
  questions:QuestionReducer 
});

export default rootReducer;
