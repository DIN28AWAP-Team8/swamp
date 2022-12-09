import React from "react";
import "../App.css";

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
          <button className="close-btn btn btn-secondary" onClick={this.onClose}>
            close
          </button>
        </div>
        <div className="mdl-content">{this.props.children}</div>
      </div>
    );
  }
}
