import React, { useState } from "react";
import { logout } from "../actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = (props) => {

    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector(state => state.auth);

    const handleLogout = (e) => {
        e.preventDefault();
    
        setLoading(true);
    
        dispatch(logout())
            .then(() => {
            window.location.reload();
            })
            .catch(() => {
                setLoading(false);
            });
    };

    if (!isLoggedIn) {
        return <Redirect to="/login" />;
    }

    return(
        <div id="Header">

            <img alt="dianalyse logo" src="/assets/logo2.png"
                width="auto" height="40%" />

            <Link to="/dashboard">Dashboard</Link>

            <Link to="/sites">Mes Sites</Link>

            <button className="btn btn-block" disabled={loading} onClick={handleLogout}>
                {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Se déconnecter</span>
            </button>
        </div>
    )
}

export default Header;