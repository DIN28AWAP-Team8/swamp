import React, { Component } from "react";
import "../App.css";
import { AiOutlinePlusCircle, AiOutlinePlusSquare } from "react-icons/ai";

import Modal from "./create-post-modal.component";
import createPost from "./create-post";

export default class Workbench extends Component {
  state = {
    show: false,
  };
  showModal = (e) => {
    this.setState({
      show: !this.state.show,
    });
  };
  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };

  render() {
    return (
      <div className="container">
        <header className="jumbotron" style={{ textAlign: "center" }}>
          <h3>Create a post with your visualizations here</h3>
          <AiOutlinePlusCircle
            onClick={(e) => {
              this.showModal();
              createPost(1,1);
            }}
            style={{ cursor: "pointer", color: "green" }}
          />
        </header>

        <Modal onClose={this.showModal} show={this.state.show}>
          <div className="mdl-btn-container">
            <button
              className="v-btn btn btn-secondary"
              x="v1-v2"
              onClick={null}
            >
              <AiOutlinePlusSquare /> V1-V2
            </button>
            <button className="v-btn btn btn-secondary" onClick={null}>
              <AiOutlinePlusSquare /> V3-V4-V10
            </button>
            <button className="v-btn btn btn-secondary" onClick={null}>
              <AiOutlinePlusSquare /> V5
            </button>
            <button className="v-btn btn btn-secondary" onClick={null}>
              <AiOutlinePlusSquare /> V6
            </button>
            <button className="v-btn btn btn-secondary" onClick={null}>
              <AiOutlinePlusSquare /> V7-V10
            </button>
            <button className="v-btn btn btn-secondary" onClick={null}>
              <AiOutlinePlusSquare /> V8
            </button>
            <button className="v-btn btn btn-secondary" onClick={null}>
              <AiOutlinePlusSquare /> V9
            </button>
          </div>
        </Modal>
      </div>
    );
  }
}
