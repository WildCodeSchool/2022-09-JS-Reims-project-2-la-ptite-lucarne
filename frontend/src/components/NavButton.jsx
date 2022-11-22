import PropTypes from "prop-types";

export default function NavButton({ setCurrentPage, handleDejavu }) {
  return (
    <div className="button2">
      <button type="button" className="seen" onClick={handleDejavu}>
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
  handleDejavu: PropTypes.func.isRequired,
};
