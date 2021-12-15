import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";

import { useGetUserQuery } from "../feature/api/apiSlice";
import { Redirect } from "react-router";

import { Container, Row, Spinner } from "react-bootstrap";
import "./Dashboard.css";
import Historique from "./alerte/Historique";
import OnGoingAlerts from "./alerte/OngoingAlert";

const Dashboard = () => {

    //my state auth
    const { isLoggedIn, user } = useSelector(state => state.auth);
    
    //react hook trigger when component mounts, and re-render it once data has been fetched
    const {
        data: fullUser,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetUserQuery(user, { skip: !isLoggedIn, pollingInterval: 60000 });
    
    //if no user is logged in, redirect to login page
    if (!isLoggedIn) {
        return <Redirect to="/login" />;
    }

    let content;

    //adapt content with each step of the request
    if (isLoading) {
        content = (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        );
    } else if (isError) {
        content = (
            <div className="alert alert-danger" role="alert">
                The following error occured : {error}
            </div>
        );
    } else if (isSuccess) {
        content = (
            <div id="content">
                <h1>Bonjour {fullUser.name}</h1>

                <Container fluid>
                    <Row>
                        <Historique alerte={fullUser.alertes} />

                        <OnGoingAlerts alerte={fullUser.alertes} />
                    </Row>
                </Container>
            </div>
        );
    }

    return (
        <div id="Dashboard">

            <Header />

            {content}

        </div>
    )
}

export default Dashboard;