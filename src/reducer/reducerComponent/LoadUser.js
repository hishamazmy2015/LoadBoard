import { Load_data } from "../../actions/constants";

initialState = {};

export function LoadTweet(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case Load_data:
      this.state = [...state, payload]; 
      break;
    default:
      return state;
  }
}
