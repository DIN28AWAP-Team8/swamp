import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

class PostsService {
  getUserId() {
    //call API to get the user_id according to the username
    //then pass the id in the createPost request below
  }
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
    console.log("ERROR : when there is a parameter, the function is called WHEN the modal is opened - how...?",x);
  }
}
export default new PostsService();
