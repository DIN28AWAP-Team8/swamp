// Home component is public for all visitor
import React, { Component } from "react";
import axios from "axios";
import UserService from "../services/user.service";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      posts: [],
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
    axios
      .get(process.env.REACT_APP_API_ADDRESS + "/posts")
      .then((response) => {
        // console.log(response);
        this.setState({ posts: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  deleteUserPost(x) {
    axios
      .delete(process.env.REACT_APP_API_ADDRESS + "/posts/delete_post", {
        params: {
          post_id: x,
        },
      })
      .then((response) => {
        console.log(response);
        window.location.reload(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>{this.state.content}</h3>
          <div>The visualizations of each user can be seen here</div>
        </header>

        <div className="posts">
          {this.state.posts.map((data) => (
            <table className="table table-dark" key={data.Post_ID}>
              <thead>
                <tr>
                  <th scope="col">User ID : </th>
                  <th scope="col">Post number : </th>
                  <th scope="col">Timestamp : </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="col">{data.User_ID} </th>
                  <th scope="row">{data.Post_ID}</th>
                  <th scope="row">{data.Date_Time}</th>
                  <th>
                    <button
                      type="button"
                      className="close-btn btn btn-secondary"
                      onClick={() => {
                        this.deleteUserPost(data.Post_ID);
                      }}
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              </tbody>
            </table>
          ))}
        </div>
      </div>
    );
  }
}
