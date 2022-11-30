// Home component is public for all visitor

import React, { Component } from "react";

import UserService from "../services/user.service";
import V1V2Chart from "./charts/V1-V2";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      (response) => {
        this.setState({
          content: response.data,
        });
      },
      (error) => {
        this.setState({
          content:
            (error.response && error.response.data) ||
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
          /* TODO: temporary, please remove */
          <div><V1V2Chart /></div>
        </header>
      </div>
    );
  }
}
