function Choix1() {
  return (
    <section>
      <h1>Avez-vous envie de vous évader ?</h1>
      <div className="choice">
        <button
          type="button"
          onClick="location.href='choix2.html'"
          className="yes"
        >
          OUI
        </button>
        <button
          type="button"
          onClick="location.href='choix1.html'"
          className="no"
        >
          NON
        </button>
      </div>
    </section>
  );
}

export default Choix1;
