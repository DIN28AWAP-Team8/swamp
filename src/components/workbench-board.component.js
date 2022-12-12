import React, { Component, useState } from "react";
import "../App.css";
import Modal from "./create-post-modal.component";

export default class Workbench extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

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
          <br />
          <button
            className="btn btn-secondary"
            onClick={(e) => {
              this.showModal();
            }}
          >
            CREATE
          </button>
        </header>

        <Modal onClose={this.showModal} show={this.state.show}>
          <div className="checkbox-container">
            <div className="labl-chkbx">
              <label htmlFor="V1V2">V1+V2</label>
              <input type="checkbox" id="V1V2" name="c" />
            </div>

            <div className="labl-chkbx">
              <label htmlFor="V3V4V10">V3+V4+V10</label>
              <input type="checkbox" id="V3V4V10" name="c" />
            </div>
            <div className="labl-chkbx">
              <label htmlFor="V5">V5</label>
              <input type="checkbox" id="V5" name="c" />
            </div>
            <div className="labl-chkbx">
              <label htmlFor="V6">V6</label>
              <input type="checkbox" id="V6" name="c" />
            </div>
            <div className="labl-chkbx">
              <label htmlFor="V7V10">V7+V10</label>
              <input type="checkbox" id="V7V10" name="c" />
            </div>
            <div className="labl-chkbx">
              <label htmlFor="V8">V8</label>
              <input type="checkbox" id="V8" name="c" />
            </div>
            <div className="labl-chkbx">
              <label htmlFor="V9">V9</label>
              <input type="checkbox" id="V9" name="c" />
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
