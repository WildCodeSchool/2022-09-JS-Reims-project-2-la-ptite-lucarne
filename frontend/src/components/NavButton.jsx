import PropTypes from "prop-types";

export default function NavButton({ setDejavu, dejavu, setCurrentPage }) {
  return (
    <div className="button2">
      <button
        type="button"
        className="seen"
        onClick={() => setDejavu(dejavu + 1)}
      >
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
  setDejavu: PropTypes.func.isRequired,
  dejavu: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};
