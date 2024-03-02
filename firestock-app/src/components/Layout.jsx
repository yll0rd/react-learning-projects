// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from "./NavBar.jsx";
import UploadForm from "./UploadForm.jsx";

// eslint-disable-next-line react/prop-types
const Layout = ({ children, countText, isCollapsed, onChange, onSubmit, toggle, inputs }) => {
    return (
        <div>
            <Navbar />
            <div className="container text-center mt-5">
                <button className='btn btn-success float-end' onClick={() => toggle(!isCollapsed)}>{isCollapsed ? '+ Add' : 'Close' }</button>
                <div className='clearfix mb-4'></div>
                { !isCollapsed && <UploadForm handleUploadFormOnChange={onChange} input={inputs} handleUploadFormSubmit={onSubmit} /> }
                {countText}
                { children }
            </div>
        </div>
    );
};

export default Layout;
