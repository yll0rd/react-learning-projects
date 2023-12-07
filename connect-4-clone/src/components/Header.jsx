// eslint-disable-next-line no-unused-vars
import React from 'react';
import { GAME_STATE_PLAYING, GAME_STATE_WIN } from '../Constants';

// eslint-disable-next-line react/prop-types
const Header = ({gameState, currentPlayer, winPlayer}) => {
    const renderLabel = () => {
        switch (gameState) {
            case GAME_STATE_PLAYING:
                return (<>Player <span className='header-text-number'>{currentPlayer}</span> Turn</>)
            case GAME_STATE_WIN:
                return (<>Player <span className='header-text-number'>{winPlayer}</span> WINS</>)
        }
    }
    return (
        <div className='panel header'>
            <div className='header-text'>{ renderLabel() }</div>
        </div>
    );
};

export default Header;