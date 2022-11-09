import PropTypes from "prop-types";

function Movie({
  setDejavu,
  dejavu,
  movieBackdropPath,
  movieTitle,
  movieOverview,
}) {
  return (
    <section>
      <h2>{movieTitle}</h2>
      <img
        className="imagetohover"
        alt="cannot load poster"
        src={`https://image.tmdb.org/t/p/w500${movieBackdropPath}`}
      />
      <figcaption className="middle">
        <p className="texthover">{movieOverview}</p>
      </figcaption>
      <div>
        <div className="button2">
          <button
            type="button"
            className="seen"
            onClick={() => setDejavu(dejavu + 1)}
          >
            Déja Vu
          </button>
          <button type="button" className="look">
            Voir ce film
          </button>
        </div>
      </div>
    </section>
  );
}

Movie.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  movieBackdropPath: PropTypes.string.isRequired,
  movieOverview: PropTypes.string.isRequired,
  setDejavu: PropTypes.func.isRequired,
  dejavu: PropTypes.number.isRequired,
  /* goTo: PropTypes.func.isRequired, */
  /* movieId: PropTypes.number.isRequired, */
};

export default Movie;
