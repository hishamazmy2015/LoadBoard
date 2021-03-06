import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Select from "react-select";
import { Auth } from "../actions/Auth";
import UserAction from "../actions/UserAction";

function Login({ location, history, path }) {
  const locations = useLocation();
  const dispatch = useDispatch();
  // const referer = locations.state && locations.state.referer;
  let users = useSelector((state) => state.users);
  const authUser = useSelector((state) => state.auth);
  const readFun = () => {
    dispatch(UserAction());
  };

  useEffect(() => {
    readFun();
  }, []);

  let options = [];
  const [stateForm, setStateForm] = useState("Select one of the users ");
  Object.entries(users).map(([key, type]) => {
    options.push({ label: key, value: type });
  });
  users &&
    users.length > 0 &&
    users.map((item) => options.push({ label: item.name, value: item.id }));

  const handleChange = (selectedOption) => {
    setStateForm(selectedOption);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    dispatch(Auth(users[stateForm.value.id]));
    if (location.state && location.state.referrer)
      history.push(location.state.referrer.pathname);
    else history.push("/leaderboard");
  };
  return (
    <div className="">
      <Row>
        <Col></Col>
        <Col>
          <Card>
            <Form onSubmit={(e) => onSubmitForm(e)}>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledTextInput">
                  <h4>
                    <span> Select user To login </span>
                  </h4>
                </Form.Label>
              </Form.Group>
              <br />
              <Select
                value={stateForm}
                onChange={handleChange}
                options={options}
              />

              <Button type="submit">Sign In</Button>
            </Form>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
}

export default Login;
