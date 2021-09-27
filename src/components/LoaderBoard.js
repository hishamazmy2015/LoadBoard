import React, { useEffect } from "react";
import { Col, Container, Row, Card, Collapse } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions } from "../actions/questionAction";
import UserAction from "../actions/UserAction";

function LoaderBoard() {
  const dispatch = useDispatch();
  let auth = useSelector((state) => state.auth);
  let users = useSelector((state) => state.users);
  let questionss = useSelector((state) => state.questions);

  const readFun = () => {
    dispatch(UserAction());
    dispatch(fetchQuestions());
  };
  useEffect(() => readFun(), []);
  const usersList = Object.keys(users).map((key) => users[key]);
  const answers = Object.keys(auth.user.answers).map((key) => key);
  const questions = Object.keys(questionss).map((key) => questionss[key]);

  const Answers =
    answers &&
    answers.length > 0 &&
    answers.map(
      (questUserId) =>
        questions &&
        questions.length > 0 &&
        questions.filter((quest) => questUserId === quest.id)
    );

  const answerQuestions = questions.filter((quest) =>
    answers.includes(quest.id)
  );

  const UnAnswers = questions.filter(
    (questId) => !answerQuestions.includes(questId)
  );

  return (
    <div>
      <Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <div>
            {usersList.map((user) => (
              <Row>
                <Card>
                  <Col>
                    {user.avatarURL ? (
                      <img src={user.avatarURL} height={90} width={80} />
                    ) : (
                      <img
                        src="../../images/avataaars_5.png"
                        height={90}
                        width={80}
                      />
                    )}
                  </Col>

                  <Col>
                    <div>
                      <h3>{user.name}</h3>
                      <p>
                        {" "}
                        Answered Questions :{" "}
                        {
                          Object.keys(user.answers).map((key) => key).length
                        }{" "}
                      </p>
                      <p> Created Questions : {user.questions.length}</p>
                    </div>
                  </Col>
                  <Col>
                    {" "}
                    Score :{" "}
                    {Object.keys(user.answers).map((key) => key).length +
                      user.questions.length}
                  </Col>
                </Card>
              </Row>
            ))}
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default LoaderBoard;
