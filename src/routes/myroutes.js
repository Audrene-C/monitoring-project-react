import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import Site from "../components/Site";

const MyRoutes = [
    <Route exact path="/login" component={Login} key="login"/>,
    <Route exact path="/sites" component={Site} key="sites"/>,
    <Route exact path="/dashboard" component={Dashboard} key="dashboard"/>
];

export default MyRoutes;
