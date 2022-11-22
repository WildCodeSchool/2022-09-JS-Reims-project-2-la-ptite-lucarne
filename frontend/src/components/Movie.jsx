import PropTypes from "prop-types";

function Movie({ moviePosterPath, movieTitle, movieId }) {
  return (
    <>
      <h2>{movieTitle}</h2>
      <img
        className="imagetohover"
        alt={`Poster cannot be loaded ${movieId}`}
        src={`https://image.tmdb.org/t/p/w500${moviePosterPath}`}
      />
    </>
  );
}

Movie.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  moviePosterPath: PropTypes.string.isRequired,
  movieId: PropTypes.number.isRequired,
};

export default Movie;
