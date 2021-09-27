import { Load_data } from "../../actions/constants";

const initialState = {};

export const LoaderBoard = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case Load_data:
      return (this.state = [...state, payload]);
    default:
      return state;
  }
};