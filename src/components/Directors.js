import React from "react";
import { directors } from "../data";

function Directors() {

  const directorList = directors.map((director) =>{

    const movieList = director.movies.map((movie) => {
      return <li key={movie}>{movie}</li>
    })

    return (
      <div key={director.name}>
        {director.name}
        {movieList}
      </div>
    )
  })


  return (
      <><h1>Directors Page</h1>
        {directorList}
      </>
    )
}

export default Directors;
