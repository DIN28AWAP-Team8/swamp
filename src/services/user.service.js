// user.service uses auth-header() helper function to add JWT to HTTP header. auth-header() returns an object containing the JWT of the currently logged in user from Local Storage.
// It is a service for accessing data. It is used by the components to request data from API.

import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_API_ADDRESS + "/api/test/";

class UserService {
  getPublicContent() {
    return axios.get(API_URL + "all");
  }

  getUserBoard() {
    return axios.get(API_URL + "user", { headers: authHeader() });
  }
  // we add a HTTP header with the help of authHeader() function when requesting authorized resource.
  getModeratorBoard() {
    return axios.get(API_URL + "mod", { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + "admin", { headers: authHeader() });
  }
}

export default new UserService();
