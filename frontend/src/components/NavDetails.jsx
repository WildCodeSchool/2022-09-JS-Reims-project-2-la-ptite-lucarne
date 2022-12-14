import PropTypes from "prop-types";

export default function NavDetails({ setCurrentPage }) {
  return (
    <div className="retour">
      <button
        type="button"
        className="return-button"
        onClick={() => {
          setCurrentPage("movie");
        }}
      >
        Retour à la navigation
      </button>
    </div>
  );
}

NavDetails.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
};
