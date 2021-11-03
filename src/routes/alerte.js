import React from "react";
import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/alerte/";

export default [
  <Route path="/alertes/create" component={Create} exact key="create" />,
  <Route path="/alertes/edit/:id" component={Update} exact key="update" />,
  <Route path="/alertes/show/:id" component={Show} exact key="show" />,
  <Route path="/alertes/" component={List} exact strict key="list" />,
  <Route path="/alertes/:page" component={List} exact strict key="page" />,
];
