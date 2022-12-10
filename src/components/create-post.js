import React from "react";
import axios from "axios";

export default function createPost(user_id, two_columns) {
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
