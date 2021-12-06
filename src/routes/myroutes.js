import React from "react";
import { Route } from "react-router-dom";
import Login from "../components/Login";
import Site from "../components/Site";

const MyRoutes = [
    <Route exact path="/login" component={Login} key="login"/>,
    <Route exact path="/sites" component={Site} key="login"/>
];

export default MyRoutes;
