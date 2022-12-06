// – The App component is a container with React Router (BrowserRouter). Basing on the state, the navbar can display its items.

import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";
import N1 from "./components/chart-N1.component";
import N2 from "./components/chart-N2.component";
import Workbench from "./components/workbench-board.component";

import { AiOutlinePlusCircle } from "react-icons/ai";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  // The following navbar dynamically changes by login status and current User’s roles.
  //   - Home: always
  //   - Login & Sign Up: if user hasn’t signed in yet
  //   - User: AuthService.getCurrentUser() returns a value
  //   - Board Moderator: roles includes ROLE_MODERATOR
  //   - Board Admin: roles includes ROLE_ADMIN

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <div className="d-flex flex-column min-vh-100">
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            Project
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>

            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div>

          <div className="navbar-nav nav-shortcuts">
            <Link to={"/N1"} className="nav-link nav-shortcut">
              Atmospheric CO2 and Temperatures
            </Link>
            <Link to={"/N2"} className="nav-link nav-shortcut">
              Emission Sources
            </Link>
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li>
                {/* Add component used to create visualizations */}
                <Link to={"/Workbench"} className="nav-link nav-ico">
                  <AiOutlinePlusCircle />
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>

              <li className="nav-item">
                <a
                  href="/login"
                  className="nav-link logout"
                  onClick={this.logOut}
                >
                  Logout
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/user" element={<BoardUser />} />
            <Route path="/mod" element={<BoardModerator />} />
            <Route path="/admin" element={<BoardAdmin />} />
            <Route path="/N1" element={<N1 />} />
            <Route path="/N2" element={<N2 />} />
            <Route path="/Workbench" element={<Workbench />} />
          </Routes>
        </div>

        <footer className="mt-auto">SHREK TEAM</footer>
      </div>
    );
  }
}

export default App;
