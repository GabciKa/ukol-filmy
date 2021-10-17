import React from 'react'

import Movie from '../Movie';

const MovieList = ({ movies }) => {
    return (
        <>
        <div>
            {movies.map(film => 
            < Movie title={film.title} poster={film.poster} year={film.year} rating={film.rating} director={film.director} genre={film.genre} key={film.id} /> )};

        </div>
        
        </>
    );
}

export default MovieList;