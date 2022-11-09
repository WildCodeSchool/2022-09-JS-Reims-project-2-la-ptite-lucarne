import PropTypes from "prop-types";

function Choix2({ goTo }) {
  return (
    <section>
      <h1>Avez-vous envie de vous évader ?</h1>
      <div className="choice">
        <button
          type="button"
          onClick={() => goTo("rambo")}
          className="firstChoice"
        >
          Fusil à pompe ?
        </button>
        <button
          Type="button"
          onClick="location.href='pres_star.html'"
          className="secondChoice"
        >
          Blaster ?
        </button>
      </div>
      <div className="proposition">
        <button
          type="button"
          onClick="location.href='pres_indiana.html'"
          className="propose"
        >
          Proposez moi un film.
        </button>
      </div>
    </section>
  );
}

Choix2.propTypes = {
  goTo: PropTypes.func.isRequired,
};

export default Choix2;
