// Profile component displays user information after the login action is successful.

// This page gets current User from Local Storage by calling AuthService.getCurrentUser() method and show user information (with token).
// If the user is not logged in, redirect to /home page

import React, { Component } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import AuthService from "../services/auth.service";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: { username: "" },
      redirect: null,
      userReady: false,
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();
    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true });
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  deleteAcc(x) {
    axios
      .delete(process.env.REACT_APP_API_ADDRESS + "/users/delete_user", {
        params: {
          user_id: x,
        },
      })
      .then((response) => {
        alert("Your account has been successfully deleted");
        // this.setState({ redirect: "/register" });
        this.logOut();
        window.location.reload(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  deleteUserPosts(x) {
    axios
      .delete(process.env.REACT_APP_API_ADDRESS + "/posts/delete_all_posts", {
        params: {
          user_id: x,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to={this.state.redirect} />;
    }

    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <div className="container">
        {this.state.userReady ? (
          <div>
            <header className="jumbotron">
              <h3>
                <strong>{currentUser.username}</strong> Profile
              </h3>
            </header>
            <p>
              <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)}{" "}
              ...{" "}
              {currentUser.accessToken.substr(
                currentUser.accessToken.length - 20
              )}
            </p>
            <p>
              <strong>Id:</strong> {currentUser.id}
            </p>
            <p>
              <strong>Email:</strong> {currentUser.email}
            </p>
            <strong>Authorities:</strong>
            <ul>
              {currentUser.roles &&
                currentUser.roles.map((role, index) => (
                  <li key={index}>{role}</li>
                ))}
            </ul>
            <button
              type="button"
              className="close-btn btn btn-secondary"
              onClick={() => {
                this.deleteUserPosts(currentUser.id);
                this.deleteAcc(currentUser.id);
              }}
            >
              Delete my Account
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}
