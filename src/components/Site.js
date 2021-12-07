import React, { useState } from "react";
import { logout } from "../actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import Header from "./Header";

const Site = (props) => {

    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector(state => state.auth);
    
    const token = localStorage.getItem('jwt_token');
    console.log('token : ', token);
    console.log('typeof token : ', typeof token);

    const handleLogout = (e) => {
        e.preventDefault();
    
        setLoading(true);
    
        dispatch(logout())
            .then(() => {
            props.history.push("/login");
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
        <div id="Sites">

            <Header />

            <button className="btn btn-primary btn-block" disabled={loading} onClick={handleLogout}>
                {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Logout</span>
            </button>
        </div>
    )
}

export default Site;
