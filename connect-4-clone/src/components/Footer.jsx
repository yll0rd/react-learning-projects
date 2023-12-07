// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const Footer = ({onClick}) => {
    return (
        <div className='panel footer' onClick={onClick}>
            <button>New Game</button>
        </div>
    );
};

export default Footer;