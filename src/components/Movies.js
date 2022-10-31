import React from "react";
import { movies } from "../data";

function Movies() {

  const movieList = movies.map((movie)=> {
    const genreList = movie.genres.map((g) => {
      return <li key={g}>{g}</li>
    })

    return(
      <div key={movie.title}>
        {movie.title}, {movie.time}
        {genreList}
      </div>
    )
  })

  return (
    <>
      <h1>Movies Page</h1>
      {movieList}
    </>
  )
}

export default Movies;
