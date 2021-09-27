import React, { useEffect } from "react";
import { Card, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchQuestions } from "../actions/questionAction";
import UserAction from "../actions/UserAction";
import TabQuestionsAns from "./TabQuestionsAns";

function LoaderBoard() {
  const dispatch = useDispatch();
  let auth = useSelector((state) => state.auth);
  let users = useSelector((state) => state.users);
  let questionss = useSelector((state) => state.questions);

  const readFun = () => {
    dispatch(fetchQuestions());
  };
  useEffect(() => readFun(), []);
  const usersList = Object.keys(users).map((key) => users[key]);
  const answers = Object.keys(auth.user.answers).map((key) => key);
  const questions = Object.keys(questionss).map((key) => questionss[key]);
  return (
    <div>
      <Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Tabs
            defaultActiveKey="home"
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
                  {questions &&
                    questions.length > 0 &&
                    questions.map(
                      (quest) =>
                        answers &&
                        answers.length > 0 &&
                        answers.map((questUserId) =>
                          questUserId === quest.id ? (
                            <TabQuestionsAns
                              usersList={usersList}
                              quest={quest}
                              showResult={true}
                            />
                          ) : (
                            <div>
                              {/* <TabQuestionsAns
                                usersList={usersList}
                                quest={quest}
                              /> */}
                            </div>
                          )
                        )
                      // ques.optionOne.votes>0 && ques.optionOne.votes>0 ?
                      // quest.optionOne.votes.length === 0 &&
                      // quest.optionTwo.votes.length === 0 ? (
                      //   <TabQuestionsAns usersList={usersList} quest={quest} />
                      // ) : (
                      //   // <TabQuestionsAns usersList={usersList} quest={quest} />
                      //   <div></div>
                      // )
                    )}

                  {/* {questions &&
                    questions.length > 1 &&
                    questions.map((quest) =>
                      // ques.optionOne.votes>0 && ques.optionOne.votes>0 ?
                      quest.optionOne.votes.length === 0 &&
                      quest.optionTwo.votes.length === 0 ? (
                        <TabQuestionsAns usersList={usersList} quest={quest} />
                      ) : (
                        // <TabQuestionsAns usersList={usersList} quest={quest} />
                        <div></div>
                      )
                    )} */}
                </Card>
              </div>
            </Tab>
            <Tab
              eventKey="profile"
              title="UnAnswered Questions   "
              className="mb-6"
            >
              <Card>
                {questions &&
                  questions.length > 0 &&
                  questions.map(
                    (quest) =>
                      answers &&
                      answers.length > 0 &&
                      answers.map((questUserId) =>
                        questUserId !== quest.id ? (
                          <TabQuestionsAns
                            usersList={usersList}
                            quest={quest}
                          />
                        ) : (
                          <div>
                            {/* <TabQuestionsAns
                                usersList={usersList}
                                quest={quest}
                              /> */}
                          </div>
                        )
                      )

                    // ques.optionOne.votes>0 && ques.optionOne.votes>0 ?

                    // quest.optionOne.votes.length > 0 ||
                    // quest.optionTwo.votes.length > 0 ? (
                    //   // <TabQuestionsAns usersList={usersList} quest={quest} />
                    //   <TabQuestionsAns
                    //     usersList={usersList}
                    //     quest={quest}
                    //     showResult={true}
                    //   />
                    // ) : (
                    //   <div></div>
                    // )
                  )}
              </Card>
            </Tab>
          </Tabs>
        </Row>
      </Container>
    </div>
  );
}

export default LoaderBoard;
