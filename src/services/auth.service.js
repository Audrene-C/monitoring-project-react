import axios from "axios";

const API_URL = "http://monitoring-project-api.test/api/";

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((res) => {
        if (res.status !== 200) {
          console.log('login request failed : ', res);
        } else {
          //save token in storage
          localStorage.setItem('jwt_token', res.data.token);
          console.log('token stored');

          //save userId in storage
          localStorage.setItem('userId', res.data.data.userId);
          console.log('userId stored');
        }

      return res.data;
    });
};

const logout = () => {
  localStorage.removeItem("jwt_token");
  localStorage.removeItem("userId");
};

// eslint-disable-next-line
export default {
  login,
  logout
};