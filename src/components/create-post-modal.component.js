import React from "react";
import "../App.css";
import PostsService from "../services/posts.service";
import Popup from "reactjs-popup";
import AuthService from "../services/auth.service";

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: { username: "" },
    };
  }
  toggleCheckbox(chkbxid0, chkbxid1) {
    document.getElementById(chkbxid0).checked = true;
    document.getElementById(chkbxid1).checked = false;
  }
  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };
  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();
    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true });
  }

  render() {
    const { currentUser } = this.state;

    if (!this.props.show) {
      return null;
    }
    return (
      <div className="mdl">
        <div className="mdl-header">
          <h2>Your Post</h2>
          <label>
            One column :&nbsp;
            <input
              type="checkbox"
              id="chkbox1"
              onClick={() => this.toggleCheckbox("chkbox1", "chkbox2")}
              defaultChecked
            />
          </label>
          <label>
            Two columns :&nbsp;
            <input
              type="checkbox"
              id="chkbox2"
              onClick={() => this.toggleCheckbox("chkbox2", "chkbox1")}
            />
          </label>
          <button
            className="close-btn btn btn-secondary"
            onClick={this.onClose}
          >
            CLOSE
          </button>
        </div>
        <div className="mdl-content">{this.props.children}</div>

        <button
          className="save-btn btn btn-secondary"
          onClick={() => PostsService.createPost(currentUser.id, 1)}
          name="trigger"
        >
          SAVE
        </button>

        {/* ------ POPUP is on stand-by because it interfers with the createPost function ------ */}
        {/* <Popup className="popup" trigger={null} position="right center">
          <div>Post created!</div>
        </Popup> */}
      </div>
    );
  }
}
