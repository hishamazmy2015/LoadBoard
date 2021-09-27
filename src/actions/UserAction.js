import React from "react";
import { _getTweets, _getUsers } from "../utils/_DATA";
import { Load_Users } from "./constants";

const UserAction = () => async (dispatch) => {
  console.log("Inside Action User");

  try {
    let users = [];
    const res = await _getUsers();
    dispatch({ type: Load_Users, payload: res });
  } catch (e) {
    console.log("error", e);
  }
};

export default UserAction;
