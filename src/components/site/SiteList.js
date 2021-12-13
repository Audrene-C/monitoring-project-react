import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Redirect } from "react-router";

import { Col, Container } from "react-bootstrap";
import "./SiteList.css";
import { CURRENT_ALERT } from "../../actions/type";

const SiteList = (props) => {

    //my state auth
    const { isLoggedIn } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const alertes = props.alertes;

    const setAlert = (currentAlert) => {
        dispatch({
            type: CURRENT_ALERT,
            payload: currentAlert,
        });
    }

    //if no user is logged in, redirect to login page
    if (!isLoggedIn) {
        return <Redirect to="/login" />;
    }

    if (alertes) {

        const qualifiedAlerts = alertes.map((alerte) => {
            if (!alerte.isHealthy && alerte.isQualified) {
                return (
                    <li 
                        key={alerte.id}
                        className="alert-h"
                        onClick={() => {setAlert(alerte)}}
                    >
                        <p>{alerte.site.name} <img src="/assets/orange.png" alt="colored icon" /></p>
                        <p>{alerte.machine.name} <img src="/assets/orange.png" alt="colored icon" /></p>
                    </li>
                )
            }            
        })

        const unqualifiedAlerts = alertes.map((alerte) => {
            if (!alerte.isHealthy && !alerte.isQualified) {
                return (
                    <li 
                        key={alerte.id}
                        className="alert-h"
                        onClick={() => {setAlert(alerte)}}
                    >
                        <p>{alerte.site.name} <img src="/assets/red.png" alt="colored icon" /></p>
                        <p>{alerte.machine.name} <img src="/assets/red.png" alt="colored icon" /></p>
                    </li>
                )
            }            
        })
    
        return (
            <Col className="left-shadow">
                <div id="site-list">
                    <h2 className="m-top">Sites contenant des alertes</h2>
                    <Container className="t-left">
                        <Col>
                            <p className="m-top bold-r">Alertes non qualifiées</p>
                            <ul>
                                {unqualifiedAlerts}
                            </ul>
                        </Col>
                        <Col>
                            <p className="m-top bold-r">Alertes qualifiées</p>
                            <ul>
                                {qualifiedAlerts}
                            </ul>
                        </Col>
                    </Container>
                </div>
            </Col>
        )
    } else {

        return <></>;
    }
}

export default SiteList;