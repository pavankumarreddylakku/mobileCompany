import React, { useState, useContext } from "react";
import Movie from "./movie";
import { MovieContent } from "./movieData";
const MovieList = () => {
    const [movie, setMovie] = useContext(MovieContent);
    console.log(useContext(MovieContent), "val");
    { console.log("movieList") }
    return (
        <div>
         {movie.length ? movie.map(val =>
         <Movie name={val.name} id={val.id} price={val.price}/>):""}
        </div>
    );
};
export default MovieList;