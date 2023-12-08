// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const Footer = ({newGameClickEvent, suggestClickEvent}) => {
    return (
        <div className='panel footer'>
            <button onClick={newGameClickEvent}>New Game</button>
            <button onClick={suggestClickEvent}>Suggest</button>
        </div>
    );
};

export default Footer;