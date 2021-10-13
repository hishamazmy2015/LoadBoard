import { LOAD_QUES, SAVE_QUES, FETCH_QUEST } from "../../actions/constants";

const initialState = {};

const QuestionReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SAVE_QUES:
    case LOAD_QUES:
      return { ...payload, ...state };

    case FETCH_QUEST:
      return { ...state, payload };
    default:
      return state;
  }
};
export default QuestionReducer;
