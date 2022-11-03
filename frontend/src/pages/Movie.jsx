import PropTypes from "prop-types";

function Movie({ data }) {
  return (
    <section>
      <div className="logo">
        <img className="Logo_site" alt="Logo" src="assets/logo_rouge.png" />
      </div>
      <div className={data.shortTitle}>
        <h1>{data.title}</h1>
        <img
          className={data.shortTitle}
          alt={data.shortTitle}
          src={data.image}
        />

        <button
          type="button"
          className="seen"
          onClick="location.href='pres_rambo.html'"
        >
          Déja Vu
        </button>
        <button
          type="button"
          className="look"
          onClick="location.href='indiana.html'"
        >
          Voir ce film
        </button>
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
};

export default Movie;
