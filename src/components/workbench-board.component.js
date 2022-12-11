import React, { Component, useState } from "react";
import "../App.css";
import { AiOutlinePlusCircle, AiOutlinePlusSquare } from "react-icons/ai";
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
          <AiOutlinePlusCircle
            onClick={(e) => {
              this.showModal();
            }}
            style={{ cursor: "pointer", color: "green" }}
          />
        </header>

        <Modal onClose={this.showModal} show={this.state.show}>
          <div className="checkbox-container">
            <div className="labl-chkbx">
              <label htmlFor="V1V2">V1+V2</label>
              <input type="checkbox" id="foo" name="V1V2" value="" />
            </div>

            <div className="labl-chkbx">
              <label htmlFor="V3V4V10">V3+V4+V10</label>
              <input type="checkbox" name="V3V4V10" value="" />
            </div>
            <div className="labl-chkbx">
              <label htmlFor="V5">V5</label>
              <input type="checkbox" name="V5" value="" />
            </div>
            <div className="labl-chkbx">
              <label htmlFor="V6">V6</label>
              <input type="checkbox" name="V6" value="" />
            </div>
            <div className="labl-chkbx">
              <label htmlFor="V7V10">V7+V10</label>
              <input type="checkbox" name="V7V10" value="" />
            </div>
            <div className="labl-chkbx">
              <label htmlFor="V8">V8</label>
              <input type="checkbox" name="V8" value="" />
            </div>
            <div className="labl-chkbx">
              <label htmlFor="V9">V9</label>
              <input type="checkbox" name="V9" value="" />
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
