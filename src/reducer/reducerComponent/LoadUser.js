import { Load_data } from "../../actions/constants";

initialState = {};

export function LoadTweet(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case Load_data:
      this.state = [payload,...state ]; 
      break;
    default:
      return state;
  }
}
