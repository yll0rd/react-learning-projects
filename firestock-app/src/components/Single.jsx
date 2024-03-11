// eslint-disable-next-line no-unused-vars
import React, {useContext} from 'react';
import Card from "./Card.jsx";
import {useLocation, useNavigate} from "react-router-dom";
import {AppContext} from "../contexts/appContext.jsx";

const Single = () => {
    const navigate = useNavigate()
    const { state } = useContext(AppContext)
    const { state: routerState } = useLocation()
    const item = state.items.find(item => item.id === routerState.id)
    console.log(item)
    // debugger
    return (
        <>
            <button className="btn btn-link" onClick={() => navigate(-1)}>Back</button>
            <div className="d-flex justify-content-center mb-5">
                <Card photo={item} />
            </div>
        </>
    );
};

export default Single;
