// eslint-disable-next-line no-unused-vars
import React, {useContext, useMemo} from 'react';
import Navbar from "./NavBar.jsx";
import UploadForm from "./UploadForm.jsx";
import {AppContext} from "../contexts/appContext.jsx";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
    const { state, dispatch } = useContext(AppContext)
    const { isCollapsed } = state

    const toggle = (bool) => dispatch({ type: 'toggleIsCollapsed', payload: {bool: bool}})

    const countText = useMemo(() => {
        return `You have ${state.count} image${state.count > 1 ? 's' : ''}`
    }, [state.count])

    return (
        <div>
            <Navbar />
            <div className="container text-center mt-5">
                <button className='btn btn-success float-end' onClick={() => toggle(!isCollapsed)}>{isCollapsed ? '+ Add' : 'Close' }</button>
                <div className='clearfix mb-4'></div>
                { !isCollapsed && <UploadForm /> }
                {countText}
                { children }
            </div>
        </div>
    );
};

export default Layout;
