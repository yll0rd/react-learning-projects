// eslint-disable-next-line no-unused-vars
import React from 'react';
import Card from "./Card.jsx";

// eslint-disable-next-line react/prop-types
const List = ({ items }) => {
    return (
        <div className="row mt-3">
            {/* eslint-disable-next-line react/prop-types */}
        {items.map((item) => {
            return(
                <div key={item.createdAt} className="col mt-5">
                    <Card photo={item} />
                </div>
            );
        })}
        </div>
    )
};

export default List;
