import PropTypes from "prop-types";

function MovieDetails({ movieTitle, moviePosterPath, movieId }) {
  return (
    <section>
      <h2>{movieTitle}</h2>
      <img
        className="imgdetails"
        alt={`Poster cannot be loaded ${movieId}`}
        src={`https://image.tmdb.org/t/p/w500${moviePosterPath}`}
      />
    </section>
  );
}

MovieDetails.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  moviePosterPath: PropTypes.string.isRequired,
  movieId: PropTypes.number.isRequired,
};

export default MovieDetails;
