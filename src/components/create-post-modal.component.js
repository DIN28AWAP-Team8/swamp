import React from "react";
import "../App.css";
import PostsService from "../services/posts.service";
import Popup from "reactjs-popup";

export default class Modal extends React.Component {
  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="mdl">
        <div className="mdl-header">
          <h2>Your Post</h2>
          <button
            className="close-btn btn btn-secondary"
            onClick={this.onClose}
          >
            CLOSE
          </button>
        </div>
        <div className="mdl-content">{this.props.children}</div>
        <Popup className="popup"
          trigger={
            <button
              className="save-btn btn btn-secondary"
              onClick={() => PostsService.createPost(1, 1)}
            >
              SAVE
            </button>
          }
          position="right center"
        >
          <div>Post created!</div>
        </Popup>
      </div>
    );
  }
}
