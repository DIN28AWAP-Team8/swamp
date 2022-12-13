import React from "react";
import axios from "axios";

class PostsService {
  createPost(user_id, two_columns) {
    axios
      .post(process.env.REACT_APP_API_ADDRESS + "/posts/create", null, {
        params: {
          user_id,
          two_columns,
        },
      })
      .then((response) => response.status)
      .catch((err) => console.warn(err));
  }
  testFunction() {
    console.log("test-function - replace it with createPost() in the modal");
  }
  testFunctionParams(x) {
    console.log(
      "ERROR : when there is a parameter, the function is called WHEN the modal is opened - how...?",
      x
    );
  }
}
export default new PostsService();
