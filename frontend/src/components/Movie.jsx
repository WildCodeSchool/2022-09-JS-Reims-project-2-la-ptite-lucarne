import PropTypes from "prop-types";

function Movie({ moviePosterPath, movieId }) {
  return (
    <img
      className="imagetohover"
      alt={`Poster cannot be loaded ${movieId}`}
      src={`https://image.tmdb.org/t/p/w500${moviePosterPath}`}
    />
  );
}

Movie.propTypes = {
  moviePosterPath: PropTypes.string.isRequired,
  movieId: PropTypes.number.isRequired,
};

export default Movie;
