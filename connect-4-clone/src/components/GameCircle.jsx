import React from 'react';

const onClick = () => {
    alert('on click')
}

const GameCircle = ({children}) => {
    return (
        <div onClick={onClick}>
            {children}
        </div>
    );
};

export default GameCircle;