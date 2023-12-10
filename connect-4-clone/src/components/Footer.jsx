// eslint-disable-next-line no-unused-vars
import React from 'react';
import {GAME_STATE_PLAYING} from "../Constants.js";

// eslint-disable-next-line react/prop-types
const Footer = ({newGameClickEvent, suggestClickEvent, gameState}) => {
    let clickEvent;
    let buttonText;
    [clickEvent, buttonText] = gameState === GAME_STATE_PLAYING ? [suggestClickEvent, 'Suggest'] : [newGameClickEvent, 'New Game']
    let footTest = 'Made with love by Youmbi Leo <3  :)'
    return (
        <>
        <div className='panel footer'>
        <button type='button' onClick={clickEvent}>{buttonText}</button>
        </div>
        <footer>{footTest}</footer>
        </>
    );
};

export default Footer;