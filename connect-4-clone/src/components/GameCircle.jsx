// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../Game.css'



// eslint-disable-next-line react/prop-types
const GameCircle = ({id, className, onCircleClicked}) => {

    // const onClick = (ev, id) => {
    //     onCircleClicked(id)
    // }

    return (
        <div className={`gameCircle ${className}`} id={id} onClick={() => onCircleClicked(id)}>
        </div>
    );
};

export default GameCircle;