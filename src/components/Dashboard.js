import React, { useEffect } from "react";
import { Card, Container, Row, Tab, Tabs } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions } from "../actions/questionAction";
import UserAction from "../actions/UserAction";
import TabQuestionsAns from "./TabQuestionsAns";

function Dashboard() {
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
          <Tabs
            defaultActiveKey="profile"
            transition={false}
            id="noanim-tab-example"
            className="mb-6"
          >
            <Tab
              eventKey="home"
              className="mb-6"
              title="    Answered Questions   "
            >
              <div>
                <Card>
                  {answerQuestions &&
                    answerQuestions.map((quest) => (
                      <div key={quest}>
                        <TabQuestionsAns
                          usersList={usersList}
                          quest={quest}
                          showResult={true}
                        />
                      </div>
                    ))}
                </Card>
              </div>
            </Tab>
            <Tab
              eventKey="profile"
              title="UnAnswered Questions   "
              className="mb-6"
            >
              <Card>
                {UnAnswers &&
                  UnAnswers.map((quest) => (
                    <div key={quest.id}>
                      <TabQuestionsAns usersList={usersList} quest={quest} />
                    </div>
                  ))}
              </Card>
            </Tab>
          </Tabs>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
