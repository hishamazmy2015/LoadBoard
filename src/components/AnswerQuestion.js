import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import UserAction from "../actions/UserAction";
import { saveQuestionAnswer } from "../actions/questionAction";

function AnswerQuestion({ location, history }) {
  const questionId = location.state.fromDashboard;
  const dispatch = useDispatch();
  const readFun = () => {
    dispatch(UserAction());
  };
  const [question, setQuestion] = useState();
  useEffect(() => readFun(), []);
  const onSubmitForm = (e) => {
    e.preventDefault();
    dispatch(saveQuestionAnswer(questionId, question));
    history.push("/loaderboard");
  };

  const handleChange = (e) => {
    setQuestion({ ...question, [e.target.name]: e.target.value });
  };

  return (
    <div>
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
                    {questionId.optionOne.text}
                  </Form.Label>
                  <br />
                  <br />
                  <span
                    style={{
                      "text-align": "center",
                      float: "left",
                      "font-size": "30px",
                      // "background-color": "#F3F5F6",
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
                    {questionId.optionTwo.text}
                  </Form.Label>
                </Form.Group>
                <Button type="submit"> Answer </Button>
              </Form>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </div>
    </div>
  );
}

export default AnswerQuestion;
