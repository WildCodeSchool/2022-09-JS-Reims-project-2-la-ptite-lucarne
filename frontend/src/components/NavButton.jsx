import PropTypes from "prop-types";

export default function NavButton({ setCurrentPage, handleMovieSeen }) {
  return (
    <div className="button2">
      <button type="button" className="seen" onClick={handleMovieSeen}>
        Déja Vu
      </button>
      <button
        type="button"
        className="look"
        onClick={() => {
          setCurrentPage("movieDetails");
        }}
      >
        Voir ce film
      </button>
    </div>
  );
}

NavButton.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
  handleMovieSeen: PropTypes.func.isRequired,
};
