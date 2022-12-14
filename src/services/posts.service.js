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
      .then((response) => {
        response.status;
        console.log(response.data);
      })
      .catch((err) => console.warn(err));
  }
}
export default new PostsService();
