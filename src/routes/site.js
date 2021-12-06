import React from "react";
import { Route } from "react-router-dom";
import Site from "../components/Site";

const SiteRoute = [
    <Route exact path="/sites" component={Site} key="login"/>
];

export default SiteRoute;
