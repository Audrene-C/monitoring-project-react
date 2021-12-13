import React from "react";
import { Route } from "react-router-dom";
import MySites from "../components/MySites";

const MySitesRoute = [
    <Route exact path="/sites" component={MySites} key="login"/>
];

export default MySitesRoute;
