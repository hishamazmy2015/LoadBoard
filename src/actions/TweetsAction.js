import React from "react";
import { _getTweets } from "../utils/_DATA";
import LoadTweet from "../reducer/reducerComponent/LoadTweet";
import { Load_data } from "./constants";

const TweetsAction = () => async (dispatch) => {
  console.log("Inside Action");

  try {
    
    // const tweets = await _getTweets();

    // dispatch({ type: Load_data, payload: tweets });

  } catch (e) {
    console.log("error", e);
  }
};

export default TweetsAction;
