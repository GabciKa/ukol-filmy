import React from "react";
import camera from './img/camera.svg';

const Header = () => {
    return (
        <div>
            <h1>
                <img className="logo" src={camera} alt="Logo" />
                V našem kině právě uvádíme
            </h1>
        </div>
    );
}

export default Header;
