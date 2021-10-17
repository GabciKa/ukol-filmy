import React from 'react';
import "./style.css";

import Movie from '../Movie';

const MovieList = ({ movies }) => {
    return (
        <>
            <div className="movieList">
                {movies.map(film => 
                <Movie title={film.title} poster={film.poster} year={film.year} rating={film.rating} director={film.director} genre={film.genre} cast={film.cast} key={film.id} /> )};

            </div>
        </>
    );
}

export default MovieList;