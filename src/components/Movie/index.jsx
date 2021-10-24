import React from 'react';
import Actor from './../Actor';
import "./style.css";

const Movie = ({ title, poster, year, rating, director, genre, cast}) => {
    return (
        <div className="movie">
            <div className="movieImg">
                <img /* src={"/assets/" + poster} */ src={`/assets/ ${poster}`} alt="plakát filmu" /> 
            </div>
            <div className="movieInfo">
                <h2 className="title">{title}</h2>
                <div className="infoLine"><h3>Rok: </h3><p className="year">{year}</p></div>
                <div className="infoLine"><h3>Hodnocení: </h3><p className="">{rating}</p></div>
                <div className="infoLine"><h3>Režie: </h3><p className="">{director}</p></div>
                <div className="infoLine"><h3>Žánr: </h3><p className="">{genre}</p></div>

                <div className="infoLine"><h3>Hrají: </h3>
                    <div className="hraji">
                        {cast.map(herec =>  <Actor name={herec.name}  as={herec.as} key={herec.name + herec.as} />)}
                    </div>
                </div>
            </div>
        </div>
    );
} 

export default Movie;