import React, { Component } from "react";
import "../App.css";

import { AiOutlinePlusCircle } from "react-icons/ai";

const API_URL = "http://localhost:8080/api/";

export default class Workbench extends Component {
  createVisu(x, y) {
    return axios
      .post(API_URL + "createVisu", {
        x,
        y,
      })
      .then((response) => {
        if (response.data.accessToken) {
          // localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>Create your visualizations here</h3>
        </header>
        <div className="visu-container">
          <div className="visu1" onClick={null}>
            <h2>
              <AiOutlinePlusCircle />
              V1-V2
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim.
            </p>
          </div>
          <div className="visu2" onClick={null}>
            <div className="visu-head">
              <h2>
                <AiOutlinePlusCircle />
                V3-V4-V10
              </h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim.
            </p>
          </div>
          <div className="visu3" onClick={null}>
            <h2>
              <AiOutlinePlusCircle />
              V5
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim.
            </p>
          </div>
          <div className="visu4" onClick={null}>
            <h2>
              <AiOutlinePlusCircle />
              V6
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim.
            </p>
          </div>
          <div className="visu5" onClick={null}>
            <h2>
              <AiOutlinePlusCircle />
              V7-V10
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim.
            </p>
          </div>
          <div className="visu6" onClick={null}>
            <h2>
              <AiOutlinePlusCircle />
              V8
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim.
            </p>
          </div>
          <div className="visu7" onClick={null}>
            <h2>
              <AiOutlinePlusCircle />
              V9
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
