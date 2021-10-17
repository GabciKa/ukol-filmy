import React from 'react';
import { render } from 'react-dom';

const Actor = ({ name, as }) => {
    return (
        <>
            <div>
                <p>{name}</p>
                <p>{as}</p>
            </div>
        </>
    );
}

export default Actor;