import React, { setState } from "react";
import "../App.css";
import PostsService from "../services/posts.service";
import AuthService from "../services/auth.service";

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: { username: "" },
      colNum: 0,
    };
  }

  checkAddress(x) {
    // using boolean logic : 0 is for 1 column, 1 is for two column (because table name is "two_columns")
    this.setState({ colNum: x });
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

  valthisform(id, col) {
    var checkboxs = document.getElementsByName("c");
    var okay = false;
    for (var i = 0, l = checkboxs.length; i < l; i++) {
      if (checkboxs[i].checked) {
        okay = true;
        break;
      }
    }
    if (okay) {
      PostsService.createPost(id, col);
      alert("✅ Your post has been saved, check it in N3:User");
    } else alert("⛔ Please check at least one checkbox!");
  }

  addChart(x, y) {
    axios
      .get(process.env.REACT_APP_API_ADDRESS + "/posts/add_chart", {
        params: {
          post_id: x,
          chart_name: y,
          description: "",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const { currentUser } = this.state;

    if (!this.props.show) {
      return null;
    }
    return (
      <div className="mdl">
        <div className="mdl-header">
          <h2>Your Post : </h2>
          <label>
            One column :&nbsp;
            <input
              type="checkbox"
              id="chkbox1"
              onClick={() => {
                this.toggleCheckbox("chkbox1", "chkbox2");
                this.checkAddress(0);
              }}
              defaultChecked
            />
          </label>
          <label>
            Two columns :&nbsp;
            <input
              type="checkbox"
              id="chkbox2"
              onClick={() => {
                this.toggleCheckbox("chkbox2", "chkbox1");
                this.checkAddress(1);
              }}
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
          onClick={() => {
            this.valthisform(currentUser.id, this.state.colNum);
          }}
          name="trigger"
        >
          SAVE
        </button>
      </div>
    );
  }
}
