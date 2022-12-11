// BoardUser, BoardModerator, BoardAdmin components will be displayed by state user.roles. In these components, we use user.service to access protected resources from Web API.
// BoardUser page calls UserService.getUserBoard()

import React, { Component } from "react";

import UserService from "../services/user.service";
import postsService from "../services/posts.service";
import GetAllPosts from "../services/get-all-posts";

export default class BoardUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
    };
  }

  componentDidMount() {
    UserService.getUserBoard().then(
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
          <div>Here we display all the visualizations the user created</div>
        </header>
      </div>
    );
  }
}
