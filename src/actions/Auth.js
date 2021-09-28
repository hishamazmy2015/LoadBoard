import { REMOVE_USER, SAVE_AUTH } from "./constants";
import { LOAD_USER } from "./constants";

export const Auth = (user) => async (dispatch) => {
  try {
    dispatch({
      type: SAVE_AUTH,
      payload: user,
    });
  } catch (e) {
    console.log("error", e);
  }
};

export const Logout = () => async (dispatch) => {
  try {
    dispatch({
      type: REMOVE_USER,
    });
  } catch (e) {
    console.log("error", e);
  }
};


