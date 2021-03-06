import { Load_Users } from "../../actions/constants";

const initialState = {};

const usersReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Load_Users:
      return payload;
    default:
      return state;
  }
};

export default usersReducer;
