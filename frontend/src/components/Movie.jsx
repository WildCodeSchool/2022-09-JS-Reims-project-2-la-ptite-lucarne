import React from "react";
import PropTypes from "prop-types";
// fonction d'affichage du titre, image et description du film
function Movie({ movie }) {
  return (
    <div>
      <h5>{movie.title}</h5>
      <div className="container">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt={movie.path}
          className="imagetohover"
        />
        <div className="middle">
          <div className="texthover">{movie.overview}</div>
        </div>
      </div>
    </div>
  );
}
Movie.propTypes = {
  movie: PropTypes.objectOf(
    PropTypes.shape({
      title: PropTypes.string,
      backdrop_path: PropTypes.string,
      path: PropTypes.string,
      overview: PropTypes.string,
    })
  ).isRequired,
};
export default Movie;
