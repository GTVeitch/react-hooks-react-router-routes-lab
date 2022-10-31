import React from "react";
import { actors } from "../data";

function Actors() {

  const actorList = actors.map((actor) => {

    const moveieList = actor.movies.map((role) =>{
      return <li key={role}>{role}</li>
    })

    return (
      <div key={actor.name}>{actor.name}
        {moveieList}
      </div>
    )
  })

  return (
    <><h1>Actors Page</h1>
      {actorList}
    </>
    )

}

export default Actors;
