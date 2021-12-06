import axios from "axios";
import getSitesByUser from './sites.service';

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

          //get sites with the logged userId
          getSitesByUser(res.data.data.userId)
            .then((resp) => {
              if (resp['hydra:totalItems'] === 0) {
                console.log('no sites found : ', resp);
              } else {
                //save sites in storage
                console.log('type of resp : ', typeof resp);
                localStorage.setItem('sites', JSON.stringify(resp));
                console.log('sites stored');
              }
            })
        }
      return res.data;
    });
};

const logout = () => {
  localStorage.removeItem("jwt_token");
  localStorage.removeItem("userId");
  localStorage.removeItem("sites");
};

// eslint-disable-next-line
export default {
  login,
  logout
};