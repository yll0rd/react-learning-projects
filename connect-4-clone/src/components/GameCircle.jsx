import React from 'react';

const onClick = (ev, id) => {
    alert('on click ' + id)
}

const GameCircle = ({id, color, children}) => {
    const style = {
        backgroundColor: color,
        borderRadius: '50%',
        width: 100,
        height: 100,
        margin: 10
    }
    return (
        <div style={style} id={id} onClick={(ev) => onClick(ev, id)}>
            {children}
        </div>
    );
};

export default GameCircle;