// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const Category = ({id, title, onClick}) => {
    return (
            <div key={id} onClick={onClick}> {title} </div>
    );
};

export default Category;
