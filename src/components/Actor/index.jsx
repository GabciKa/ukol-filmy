import React from 'react';
import "./style.css";

const Actor = ({ name, as }) => {
    return (
        <>
            <div className="actor">
                <p>{name}</p>
                <p>jako</p>
                <p className="character">{as}</p>
            </div>
        </>
    );
}

export default Actor;