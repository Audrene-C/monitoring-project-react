import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";

import { useGetUserQuery } from "../feature/api/apiSlice";
import { Redirect } from "react-router";

import { Container, Row, Spinner } from "react-bootstrap";
import "./Dashboard.css";
import SiteList from "./site/SiteList";
import AlertDetails from "./alerte/AlertDetails";

const MySites = () => {

    //my state auth
    const { isLoggedIn, user } = useSelector(state => state.auth);
    
    //react hook trigger when component mounts, and re-render it once data has been fetched
    const {
        data: fullUser,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetUserQuery(user, { skip: !isLoggedIn });
    
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
            <Container fluid>
                    <Row>
                        <SiteList alertes={fullUser.alertes}/>

                        <AlertDetails alertes={fullUser.alertes}/>
                    </Row>
            </Container>
        );
    }

    return (
        <div id="Dashboard">

            <Header />

            {content}

        </div>
    )
}

export default MySites;