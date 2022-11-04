import PropTypes from "prop-types";

function Movie({ data, goTo }) {
  return (
    <section>
      <h2>{data.title}</h2>
      <img className={data.shortTitle} alt={data.shortTitle} src={data.image} />
      <div className={data.shortTitle}>
        <div className="button2">
          <button type="button" className="seen" onClick={() => goTo("rambo")}>
            Déja Vu
          </button>
          <button
            type="button"
            className="look"
            onClick={() => goTo("MovieDetails")}
          >
            Voir ce film
          </button>
        </div>
      </div>
    </section>
  );
}

Movie.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    shortTitle: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  goTo: PropTypes.func.isRequired,
};

export default Movie;
