import { Load_data } from "../../actions/constants";

const initialState = {};

const LoadTweet = (state = initialState, action) => {
  const { type, payload } = action;
  console.log("inside reducer ", type, payload);

  switch (type) {
    case Load_data:
      return (this.state = [...state, payload]);
    default:
      return state;
  }
};
export default LoadTweet;
