import store from "../reducer/store";
import {
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "../utils/_DATA";
import { LOAD_QUES, SAVE_QUES, SAVE_AUTH } from "./constants";

export const saveQuestion =
  ({ question1, question2 }) =>
  async (dispatch) => {
    try {
      const questions = { question1, question2 };
      let user = store.getState().auth.user;
      let author = user.id;
      let avatarURL = user.avatarURL;
      await _saveQuestion({
        optionOneText: question1,
        optionTwoText: question2,
        author,
        avatarURL,
      });

      let ques = await _getQuestions();
      dispatch({
        type: SAVE_QUES,
        payload: ques,
      });
    } catch (e) {
      console.log("error", e);
    }
  };

export const fetchQuestions = () => async (dispatch) => {
  const questions = await _getQuestions();
  try {
    dispatch({
      type: LOAD_QUES,
      payload: questions,
    });
  } catch (e) {
    console.log("error", e);
  }
};

export const saveQuestionAnswer =
  (questionId, questionAns) => async (dispatch) => {
    try {
      const answer = questionAns.questionAnswer;
      const qid = questionId.id;
      let user = store.getState().auth.user;
      let authedUser = user.id;
      await _saveQuestionAnswer({ authedUser, qid, answer });

      // const userData = {
      //   ...user,
      //   answers: { [qid]: user.questions.concat(answer) },
      // };

      user.answers[qid] = answer;

      let ques = await _getQuestions();
      dispatch({
        type: SAVE_QUES,
        payload: ques,
      });

      dispatch({
        type: SAVE_AUTH,
        payload: user,
      });
    } catch (e) {
      console.log("error", e);
    }
  };
