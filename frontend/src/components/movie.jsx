import React from "react";

function Movie({ movie }) {
  return (
    <div>
      <h5>{movie.title}</h5>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={movie.path}
      />
    </div>
  );
}

export default Movie;
