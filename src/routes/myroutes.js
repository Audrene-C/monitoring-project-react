import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import MySites from "../components/MySites";

const MyRoutes = [
    <Route exact path="/login" component={Login} key="login"/>,
    <Route exact path="/sites" component={MySites} key="sites"/>,
    <Route exact path="/" component={Dashboard} key="dashboard"/>
];

export default MyRoutes;
