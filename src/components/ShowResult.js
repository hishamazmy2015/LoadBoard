import React, { useEffect, useState } from "react";
import { Card, Col, Form, ProgressBar, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import UserAction from "../actions/UserAction";
import Page404 from "./Page404";

function ShowResult({ location, history }) {

  if (!location.state) return <Page404 />;
  const questionId = location.state ? location.state.fromDashboard : "";

  const dispatch = useDispatch();
  const readFun = () => {
    dispatch(UserAction());
  };

  const lenQOne = questionId.optionOne.votes.length;
  const lenQTwo = questionId.optionTwo.votes.length;
  const total = lenQOne + lenQTwo;

  // const rationQOne = (lenQOne / total) * 100;
  // const rationQTwo = (lenQTwo / total) * 100;

  const rationQOne = Math.round((lenQOne / total) * 10000) / 100;
  const rationQTwo = Math.round((lenQTwo / total) * 10000) / 100;

  const [question, setQuestion] = useState();

  useEffect(() => readFun(), []);

  const handleChange = (e) => {
    setQuestion({ ...question, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="">
        <br />
        <br />
        <br />
        <Row>
          <Col></Col>
          <Col>
            <Card>
              <Form.Label htmlFor="disabledTextInput">
                <h3>The Result : </h3>
              </Form.Label>

              <Form>
                <Form.Group className="mb-3">
                  <br />
                  <br />
                  <Form.Label htmlFor="disabledTextInput">
                    <h5> Would You Rather </h5>
                  </Form.Label>
                  <br />
                  <br />
                  {/* {progressInstance1} */}
                  <Form.Label htmlFor="disabledTextInput">
                    {questionId.optionOne.text}
                  </Form.Label>
                  <ProgressBar now={rationQOne} label={rationQOne} />
                  {rationQOne} %
                  <br />
                  <span>
                    {lenQOne} out of {total}{" "}
                  </span>
                  <br />
                  <br />
                  <span
                    style={{
                      textAlign: "center",
                      float: "left",
                      fontSize: "30px",
                      // "background-color": "#F3F5F6",
                      marginLeft: "30%",
                    }}
                  >
                    And
                  </span>
                  <br />
                  <br />
                  <br />
                  <Form.Label htmlFor="disabledTextInput">
                    {questionId.optionTwo.text}
                  </Form.Label>
                  <ProgressBar now={rationQTwo} label={rationQTwo} />
                  {rationQTwo} %
                  <br />
                  <span>
                    {lenQTwo} out of {total}{" "}
                  </span>
                </Form.Group>

                <Link to="/leaderboard">Back</Link>
              </Form>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </div>
    </div>
  );
}

export default ShowResult;
