import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Redirect } from "react-router";

import { Col } from "react-bootstrap";
import { CURRENT_ALERT } from "../../actions/type";
import "./AlertDetails.css";

const AlertDetails = (props) => {

    //my state auth
    const { isLoggedIn } = useSelector(state => state.auth);
    const { currentAlert } = useSelector(state => state.currentAlertReducer);
    const dispatch = useDispatch();

    const alertes = props.alertes;

    if (!currentAlert) {
        dispatch({
            type: CURRENT_ALERT,
            payload: alertes[0],
        });
    }

    //if no user is logged in, redirect to login page
    if (!isLoggedIn) {
        return <Redirect to="/login" />;
    }

    if (currentAlert) {
        return (
            <Col className="left-shadow m-top">
                <h2>Détails de l'alerte</h2>
                <p>Site de : {currentAlert.site.name}</p>
                <div id="fig">
                    <figure>
                        <img src="/assets/site.png"
                            alt="site" />
                        <figcaption>{currentAlert.machine.name}</figcaption>
                    </figure>
                    <figure>
                        <img src="/assets/component.png"
                            alt="site" />
                        <figcaption>{currentAlert.component.name}</figcaption>
                    </figure>
                </div>
                <div className="left">
                    <p><span className="bold-r">Type :</span> {currentAlert.type}</p>
                    <p><span className="bold-r">Date :</span> {currentAlert.date}</p>
                    <p><span className="bold-r">Commentaire :</span> {currentAlert.comment}</p>
                </div>
            </Col>
        )
    }

}

export default AlertDetails;