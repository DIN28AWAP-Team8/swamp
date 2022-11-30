// BoardUser, BoardModerator, BoardAdmin components will be displayed by state user.roles. In these components, we use user.service to access protected resources from Web API.
// BoardModerator page calls UserService.getModeratorBoard()

import React, { Component } from "react";

import UserService from "../services/user.service";

export default class BoardModerator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
    };
  }

  componentDidMount() {
    UserService.getModeratorBoard().then(
      (response) => {
        this.setState({
          content: response.data,
        });
      },
      (error) => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString(),
        });
      }
    );
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>{this.state.content}</h3>
        </header>
      </div>
    );
  }
}
