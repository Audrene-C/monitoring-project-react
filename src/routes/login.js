import React from "react";
import { Route } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const LoginRoute = [
    <Route exact path="/login" component={LoginForm} key="login"/>
];

export default LoginRoute;
