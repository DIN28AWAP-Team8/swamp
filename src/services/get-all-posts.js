import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function GetAllPosts(user_id) {
  const [userPosts, setUserPosts] = useState([]);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_ADDRESS + "/posts/get_posts", null, {
        params: {
          user_id: 1,
        },
      })
      .then((response) => {
        setUserPosts(response.data);
      })
      .catch((err) => console.warn(err));
  }, []);
  return userPosts;
}
