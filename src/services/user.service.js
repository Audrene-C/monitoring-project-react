import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://monitoring-project-api.test/api/";

const getComponent = () => {
  return axios.get(API_URL + "components", { headers: authHeader() });
};

export default {
    getComponent,
};