import axios from "axios";

const API_URL = "http://monitoring-project-api.test/api/";

const getSitesByUser = (userId) => {
  return axios.get(API_URL + "users/" + userId + "/sites")
    .then((res) => {
        if (res.status !== 200) {
            console.log('request failed : ', res);
        } else {
            localStorage.setItem('sites', res.data);
            console.log('sites saved in store');
        }
      return res.data;
    });
};

export default getSitesByUser;