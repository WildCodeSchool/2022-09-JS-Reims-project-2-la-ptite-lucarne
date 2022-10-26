import React from "react";
import PropTypes from "prop-types";
// fonction d'affichage du titre, image et description du film
function Movie({ movie }) {
  return (
    <section>
      <h1>{movie.title}</h1>
      <figure className="container">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt="movie poster"
          className="imagetohover"
        />
        <figcaption className="middle">
          <p className="texthover">{movie.overview}</p>
        </figcaption>
      </figure>
    </section>
  );
}
Movie.propTypes = {
  movie: PropTypes.element.isRequired,
  title: PropTypes.element.isRequired,
  backdrop_path: PropTypes.element.isRequired,
  overview: PropTypes.element.isRequired,
};
export default Movie;
