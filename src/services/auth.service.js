import axios from "axios";

const API_URL = "http://monitoring-project-api.test/api/";

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
        if (res.status !== 200) {
            console.log('request failed : ', res);
        } else {
            localStorage.setItem('jwt_token', res.data.token);
            console.log('token stored');
        }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("jwt_token");
};

export default {
  login,
  logout
};