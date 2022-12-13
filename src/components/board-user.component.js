// BoardUser, BoardModerator, BoardAdmin components will be displayed by state user.roles. In these components, we use user.service to access protected resources from Web API.
// BoardUser page calls UserService.getUserBoard()

import React, { Component } from "react";
import axios from "axios";

import UserService from "../services/user.service";
import AuthService from "../services/auth.service";

export default class BoardUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: { username: "" },
      content: "",
      posts: [],
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();
    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true });

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

    axios
      .get(process.env.REACT_APP_API_ADDRESS + "/posts/get_posts", {
        params: {
          user_id: currentUser.id,
        },
      })
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div className="container">
        <header className="jumbotron">
          <h3>{this.state.content}</h3>
          <div>Here we display all the visualizations the user created</div>
        </header>

        <div className="posts">
          {this.state.posts.map((data) => (
            <table className="table table-dark">
              <thead>
                <tr>
                  <th scope="col">Post number : </th>
                  <th scope="col">Timestamp : </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">{data.Post_ID}</th>
                  <th scope="row">{data.Date_Time}</th>
                </tr>
              </tbody>
            </table>
          ))}
        </div>
      </div>
      
    );
  }
}
