import React from "react";
import { useSelector } from "react-redux";

import { Redirect } from "react-router";
import { useHistory } from "react-router-dom";

import { Col } from "react-bootstrap";
import "./Historique.css";

const Historique = (props) => {

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
        const renderedAlertes = alertes.map((alerte) => {
            let color = alerte.isHealthy ? "alerte-verte" : alerte.isQualified ? "alerte-orange" : "alerte-red";
            return (
                <div 
                    key={alerte.id} 
                    className={color}
                    onClick={goToSites}
                >
                    <p>{alerte.site.name} - {alerte.machine.name}</p>
                    <p>Type : {alerte.type}</p>
                    <p>Date : {alerte.date}</p>
                    <p>Cliquez pour plus de détails</p>
                </div>
            )
        })
    
        return (
            <Col className="left-shadow">
                <div id="Historique" className="m-top">    
                    <div>
                        <h2 className="m-top">Historique des alertes</h2>
                        <div>
                            {renderedAlertes}
                        </div>
                    </div>
                </div>
            </Col>
        )
    } else {

        return <></>;
    }
}

export default Historique;