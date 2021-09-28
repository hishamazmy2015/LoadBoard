import store from "../reducer/store";
import { _getQuestions, _saveQuestion } from "../utils/_DATA";
import { LOAD_QUES, SAVE_QUES } from "./constants";

export const getQuestionsAnswered = () => async (dispatch) => {
  try {
  
    const questions = { question1, question2 };
    let author = store.getState().auth.user.id;
    _saveQuestion({ question1, question2, author });
    const ques = _getQuestions();
    dispatch({
      type: SAVE_QUES,
      payload: { question1, question2, author },
    });

  } catch (e) {
    console.log("error", e);
  }
};

export const getQuestionsNotAnswered = () => async (dispatch) => {
  try {
    dispatch({
      type: LOAD_QUES,
      //   payload: tweets,
    });
  } catch (e) {
    console.log("error", e);
  }
};
