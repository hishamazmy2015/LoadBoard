import { SAVE_AUTH } from "../../actions/constants";
import { LOAD_USER, REMOVE_USER } from "../../actions/constants";

const initialState = {};

const saveAuthentication = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SAVE_AUTH:
      return { ...state, isAuthenticated: true, load: false, user: payload };
    case LOAD_USER:
      return state.auth;
    case REMOVE_USER:
      return { ...state, isAuthenticated: false, load: false, user: null };
    default:
      return state;
  }
};

export default saveAuthentication;
