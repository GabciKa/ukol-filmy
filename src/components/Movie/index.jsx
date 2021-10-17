import React from 'react'


const Movie = ({ title, poster, year, rating, director, genre, cast}) => {
    return (
        <div>
            <div className="">{title}</div>
            <div className="">
                <div className="">{poster}</div>
                <div className="">{year}</div>
                <div className="">{rating}</div>
                <div className="">{director}</div>
                <div className="">{genre}</div>
                <div className="">{cast}</div>
            </div>
        </div>
    );
}

export default Movie;