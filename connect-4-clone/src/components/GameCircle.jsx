// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../Game.css'



// eslint-disable-next-line react/prop-types
const GameCircle = ({id, onCircleClicked}) => {

    // const onClick = (ev, id) => {
    //     onCircleClicked(id)
    // }

    const isEvenClass = id % 2 === 0 ? 'even' : 'odd';
    return (
        <div className={`gameCircle ${isEvenClass}`} id={id} onClick={() => onCircleClicked(id)}>
        </div>
    );
};

export default GameCircle;