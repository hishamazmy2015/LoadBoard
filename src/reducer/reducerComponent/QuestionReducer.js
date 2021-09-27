import { LOAD_QUES, SAVE_QUES } from "../../actions/constants";

const initialState = {};

const QuestionReducer = (state = initialState, action) => {
  const { type, payload } = action;

  console.log(
    "<--------------------------------- inside QuestionReducer reducer ---------------------------------> ",
    type,
    payload
  );

  switch (type) {
    case SAVE_QUES:
    case LOAD_QUES:
      return { ...state, ...payload };
    // return {...state.questions;
    default:
      return state;
  }
};
export default QuestionReducer;
