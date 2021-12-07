import React from "react";
import { useSelector } from "react-redux";

import { useGetAlertesByUserQuery } from "../../feature/api/apiSlice";
import { Redirect } from "react-router";
import classNames from "classnames";

import { Col, Spinner } from "react-bootstrap";
import "./Historique.css";

const Historique = () => {

    //my state auth
    const { isLoggedIn, user } = useSelector(state => state.auth);

    //fetch alerts for this user
    const { 
        data: res,
        isLoading,
        isFetching, 
        isSuccess, 
        isError, 
        error 
    } = useGetAlertesByUserQuery(user, { skip: !isLoggedIn });

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

        const alertes = res['hydra:member'];

        const renderedAlertes = alertes.map((alerte) => (
            <p key={alerte.id}>{alerte.date} - {alerte.type} - {alerte.comment}</p>
        ))
    
        const containerClassname = classNames('alertes-container', {
        disabled: isFetching,
        })

        content = (
            <div id="Historique">
                <input type="checkbox" />
                <span>Activer les notifications</span>

                <div>
                    <p>Historique des alertes</p>
                    <div className={containerClassname}>
                        {renderedAlertes}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <Col>

            {content}

        </Col>
    )
}

export default Historique;