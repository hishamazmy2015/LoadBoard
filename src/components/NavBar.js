import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../actions/Auth";
import { Button } from "react-bootstrap";

function NavBar({ history }) {
  const authUser = useSelector((state) => state.auth);
  const { isAuthenticated, load, user } = authUser;
  const dispatch = useDispatch();
  function logout() {
    dispatch(Logout());
    // dispatch(Logout);
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          {/* <Navbar.Brand href="/dashboard"></Navbar.Brand> */}
          {/* <Nav className="me-auto"> */}
          <Link to="/">Home</Link>
          <Link to="/add">New Question</Link>
          <Link to="/leaderboard">Loader Board</Link>

          {isAuthenticated ? (
            // <Link to="/logout">Logout</Link>
            <div>
              <span
                style={{
                  textAlign: "center",
                  float: "right",
                  fontSize: "30px",
                  backgroundColor: "#F3F5F6",
                  marginLeft: "30%",
                }}
              >
                {" "}
                Welcome {authUser && authUser.user && authUser.user.name}{" "}
              </span>
              {user.avatarURL ? (
                <img src={user.avatarURL} height={90} width={80} />
              ) : (
                <img
                  src="../../images/avataaars_5.png"
                  height={40}
                  width={40}
                />
              )}
              <Button
                onClick={() => {
                  logout();
                  {
                    history.push("/login");
                  }
                }}
              >
                <span
                  style={{
                    textAlign: "right",
                    float: "right",
                    fontSize: "10px",
                    marginLeft: "10%",
                  }}
                >
                  Logout
                </span>
              </Button>
            </div>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </Container>
      </Navbar>
    </div>
  );
}

export default withRouter(NavBar);
