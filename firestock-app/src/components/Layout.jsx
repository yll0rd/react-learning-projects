// eslint-disable-next-line no-unused-vars
import React, {useContext, useEffect, useMemo} from 'react';
import Navbar from "./NavBar.jsx";
import UploadForm from "./UploadForm.jsx";
import {AppContext} from "../contexts/appContext.jsx";
import {useAuthContext} from "../contexts/AuthContext.jsx";
import {Outlet} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Layout = () => {
    const { state, dispatch, read } = useContext(AppContext)
    const { isCollapsed } = state
    const { currentUser, authenticate } = useAuthContext()

    useEffect(() => {
        read("stocks").then(console.log)
        authenticate()
    }, []);

    const toggle = (bool) => dispatch({ type: 'toggleIsCollapsed', payload: {bool: bool}})

    return (
        <div>
            <Navbar />
            <div className="container text-center mt-5">
                {currentUser &&
                    <button className='btn btn-success float-end' onClick={() => toggle(!isCollapsed)}>
                        {isCollapsed ? '+ Add' : 'Close'}
                    </button>}
                <div className='clearfix mb-4'></div>
                { !isCollapsed && <UploadForm /> }
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
