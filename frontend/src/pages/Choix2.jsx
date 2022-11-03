function Choix2() {
  return (
    <section>
      <h1>Avez-vous envie de vous évader ?</h1>
      <br />
      <br />
      <div className="choice">
        <button
          type="button"
          onClick="location.href='pres_rambo.html'"
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
      <br />
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

export default Choix2;
