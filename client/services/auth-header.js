// auth-header() returns an object containing the JWT of the currently logged in user from Local Storage.
// user.service uses auth-header() helper function to add JWT to HTTP header

// It retrieves data from server. In the case we access protected resources, the HTTP request needs Authorization header. 
// authHeader() is a helper function, it checks Local Storage for user item. If there is a logged in user with accessToken (JWT), return HTTP Authorization header. Otherwise, return an empty object.

export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.accessToken) {
    // for Node.js Express back-end
    return { "x-access-token": user.accessToken };
  } else {
    return {};
  }
}
