// auth.service methods use axios to make HTTP requests.
// Its also store or get JWT from Browser Local Storage inside these methods.

// Functions :
// - login(): POST {username, password} & save JWT to Local Storage
// - logout(): remove JWT from Local Storage
// - register(): POST {username, email, password}
// - getCurrentUser(): get stored user information (including JWT)

import axios from "axios";

const API_URL = process.env.REACT_APP_API_ADDRESS + "/api/auth/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
