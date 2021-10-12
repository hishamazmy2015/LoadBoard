import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { saveQuestion } from "../actions/questionAction";

function QuestionComponent({ history }) {
  const [stateForm, setStateForm] = useState({ question1: "", question2: "" });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setStateForm({ ...stateForm, [e.target.name]: e.target.value });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    dispatch(saveQuestion(stateForm));
    history.push("/");
  };

  return (
    <div className="">
      <br />
      <br />
      <br />
      <br />
      <Row>
        <Col></Col>
        <Col>
          <Card>
            <Form.Label htmlFor="disabledTextInput">
              <h3>Create New Question : </h3>
            </Form.Label>

            <Form onSubmit={(e) => onSubmitForm(e)}>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledTextInput">
                  Would You Rather
                </Form.Label>
                <br />
                <br />
                <input
                  type="text"
                  name="question1"
                  onChange={(e) => handleChange(e)}
                  name="question1"
                  value={stateForm.question1}
                />

                {/* <Form.Control
                  name="question1"
                  Onchange={(e) => handleChange(e)}
                  id="disabledTextInput"
                  placeholder="Disabled input"
                /> */}
              </Form.Group>
              OR
              <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledTextInput"></Form.Label>
                <input
                  type="text"
                  name="question2"
                  onChange={(e) => handleChange(e)}
                  name="question2"
                  value={stateForm.question2}
                />

                {/* <FormControl
                  name="question2"
                  value={stateForm.question2}
                  Onchange={(e) => handleChange(e)}
                  id="disabledTextInput"
                  placeholder="Disabled input"
                /> */}
              </Form.Group>
              <Button type="submit"> Answer </Button>
            </Form>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
}

export default QuestionComponent;
