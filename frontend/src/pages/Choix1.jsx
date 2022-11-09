import PropTypes from "prop-types";

function Choix1({ goTo }) {
  return (
    <section>
      <h1>Avez-vous envie de vous évader ?</h1>
      <div className="choice">
        <button type="button" onClick={() => goTo("indiana")} className="yes">
          OUI
        </button>
        <button type="button" onClick={() => goTo("rambo")} className="no">
          NON
        </button>
      </div>
    </section>
  );
}

Choix1.propTypes = {
  goTo: PropTypes.func.isRequired,
};

export default Choix1;
