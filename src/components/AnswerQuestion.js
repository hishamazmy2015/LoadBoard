import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { saveQuestionAnswer } from "../actions/questionAction";
import { _getQuestions } from "../utils/_DATA";
import Page404 from "./Page404";

function AnswerQuestion({ location, history, match }) {
  const id = match.params;
  let questionId =
    location.state && Object.keys(location.state.ids).includes(id.questionId)
      ? location.state.fromDashboard
      : readFun();

  async function readFun() {
    let ques = await _getQuestions().then((ques) => ques);
    questionId = Object.keys(ques)
      .map((key) => ques[key])
      .filter((quest) => quest.id === id.questionId)[0];
  }

  useEffect(() => readFun(), []);

  const dispatch = useDispatch();
  const [question, setQuestion] = useState();
  const onSubmitForm = (e) => {
    e.preventDefault();
    dispatch(saveQuestionAnswer(questionId, question));
    history.push("/");
  };

  const handleChange = (e) => {
    setQuestion({ ...question, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {questionId && !questionId.optionTwo && !questionId.optionOne ? (
        <Page404 />
      ) : (
        <div>
          {questionId ? (
            <div className="">
              <br />
              <br />
              <Row>
                <Col></Col>
                <Col>
                  <Card>
                    <Form.Label htmlFor="disabledTextInput">
                      <h3>Answer the Question : </h3>
                    </Form.Label>

                    <Form onSubmit={(e) => onSubmitForm(e)}>
                      <Form.Group className="mb-3">
                        <br />
                        <br />
                        <Form.Label htmlFor="disabledTextInput">
                          <h5> Would You Rather </h5>
                        </Form.Label>
                        <br />
                        <br />
                        <input
                          type="radio"
                          value="optionOne"
                          name="questionAnswer"
                          onChange={(e) => handleChange(e)}
                        />
                        <Form.Label htmlFor="disabledTextInput">
                          {questionId &&
                            questionId.optionOne &&
                            questionId.optionOne.text}
                        </Form.Label>
                        <br />
                        <br />
                        <span
                          style={{
                            textAlign: "center",
                            float: "left",
                            fontSize: "30px",
                            marginLeft: "30%",
                          }}
                        >
                          OR
                        </span>
                        <br />
                        <br />
                        <br />
                        <input
                          type="radio"
                          value="optionTwo"
                          name="questionAnswer"
                          onChange={(e) => handleChange(e)}
                        />
                        <Form.Label htmlFor="disabledTextInput">
                          {questionId &&
                            questionId.optionTwo &&
                            questionId.optionTwo.text}
                        </Form.Label>
                      </Form.Group>
                      <Button type="submit"> Answer </Button>
                    </Form>
                  </Card>
                </Col>
                <Col></Col>
              </Row>
            </div>
          ) : (
            <Page404 />
          )}
        </div>
      )}
    </div>
  );
}

export default AnswerQuestion;
