// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const Header = ({player}) => {
    return (
        <div className='panel header'>
            <div className='header-text'>Player <span className='header-text-number'>{player}</span> Turn</div>
        </div>
    );
};

export default Header;