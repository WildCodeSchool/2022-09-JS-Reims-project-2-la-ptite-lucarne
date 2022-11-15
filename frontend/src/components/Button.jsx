import PropTypes from "prop-types";

function Button({ setShow, nextTitle }) {
  return (
    <div>
      <button
        className="homeButton"
        type="button"
        onClick={() => setShow(nextTitle)}
      >
        <span />
        <span />
        <span />
        <span />
        Commencer
      </button>
    </div>
  );
}

Button.propTypes = {
  setShow: PropTypes.func.isRequired,
  nextTitle: PropTypes.string.isRequired,
};

export default Button;
