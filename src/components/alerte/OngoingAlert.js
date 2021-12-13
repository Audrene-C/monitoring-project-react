import React from "react";
import { useSelector } from "react-redux";

import { Redirect } from "react-router";
import { useHistory } from "react-router-dom";

import { Col } from "react-bootstrap";
import "./OngoingAlert.css";

const OnGoingAlerts = (props) => {

    //my state auth
    const { isLoggedIn } = useSelector(state => state.auth);

    const history = useHistory();
    const alertes = props.alerte;

    //if no user is logged in, redirect to login page
    if (!isLoggedIn) {
        return <Redirect to="/login" />;
    }

    const goToSites = () => { 
        let path = '/sites'; 
        history.push(path);
    }

    if (alertes) {

        const renderedAlertes = alertes.filter((alerte) => {
            if (!alerte.isHealthy) {
                return alerte;
            }
        }).map((activeAlerts) => (
            <div 
                key={activeAlerts.id} 
                className={ activeAlerts.isQualified ? "alerte-orange" : "alerte-red" }
                onClick={goToSites}
            >
                <p>{activeAlerts.site.name} - {activeAlerts.machine.name}</p>
                <p>Type : {activeAlerts.type}</p>
                <p>Date : {activeAlerts.date}</p>
                <p>Cliquez pour plus de détails</p>
            </div>
        ))
    
        return (
            <Col className="left-shadow">
                <div id="OnGoingAlerts">
                    <h2 className="m-top">Alertes en cours</h2>
                    <div>
                        {renderedAlertes}
                    </div>
                </div>
            </Col>
        )
    } else {

        return <></>;
    }
}

export default OnGoingAlerts;