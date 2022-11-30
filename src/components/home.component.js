// Home component is public for all visitor

import React, { Component } from "react";

import UserService from "../services/user.service";
import V1V2Chart from "./charts/V1-V2";
import V3V4Chart from "./charts/V3-V4";
import V5Chart from "./charts/V5"
import V6Chart from "./charts/V6"
import V8Chart from "./charts/V8"

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
          <div><V3V4Chart /></div>
          <div><V5Chart /></div>
          <div><V6Chart /></div>
          <div><V8Chart /></div>
        </header>
      </div>
    );
  }
}
