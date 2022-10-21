import React from "react";
import PropTypes from "prop-types";

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

Movie.propTypes = {
  movie: PropTypes.element.isRequired,
  title: PropTypes.element.isRequired,
  path: PropTypes.element.isRequired,
  backdrop_path: PropTypes.element.isRequired,
};

export default Movie;
