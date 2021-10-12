import { LOAD_QUES, SAVE_QUES } from "../../actions/constants";

const initialState = {};

const QuestionReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SAVE_QUES:
    case LOAD_QUES:
      return {...payload, ...state };
    default:
      return state;
  }
};
export default QuestionReducer;
