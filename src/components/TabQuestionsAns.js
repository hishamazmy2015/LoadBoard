import React, { useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { fetchQuestions } from "../actions/questionAction";
import { useDispatch, useSelector } from "react-redux";

function TabQuestionsAns(props) {
  const { usersList, quest, showResult } = props;
  const dispatch = useDispatch();
  const readFun = () => {
    dispatch(fetchQuestions());
  };
  useEffect(() => readFun(), []);
  let questions = useSelector((state) => state.questions);

  return (
    <div>
      <div>
        {usersList.map((user) => (
          <div key={user.id}>
            <Card>
              {user.id === quest.author ? (
                <div>
                  <Row>
                    <Col>
                      {user.avatarURL ? (
                        <img src={quest.avatarURL} height={90} width={80} />
                      ) : (
                        <img
                          src="../../images/avataaars_5.png"
                          height={90}
                          width={80}
                        />
                      )}
                    </Col>
                    <Col>
                      <Row>
                        <span>Would you further prefer! </span>
                      </Row>
                      <Row>{quest.optionOne.text}</Row>
                      <Row>{quest.id}</Row>
                    </Col>
                    <Col>
                      {showResult ? (
                        <div>
                          <Link
                            to={{
                              pathname: `/questions/${user.id}`,
                              state: { fromDashboard: quest },
                            }}
                          >
                            Show Result
                          </Link>
                        </div>
                      ) : (
                        <div>
                          <Link
                            to={{
                              pathname: `/question/${quest.id}`,
                              state: {
                                fromDashboard: quest,
                                ids: questions,
                              },
                            }}
                          >
                            ANSWER QUESTION
                          </Link>
                        </div>
                      )}
                    </Col>
                  </Row>
                </div>
              ) : (
                ""
              )}
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TabQuestionsAns;
