function Rambo() {
  return (
    <section>
      <div className="logo">
        <img className="Logo_site" alt="Logo" src="assets/logo_rouge.png" />
      </div>
      <div className="indiana">
        <h1>Rambo (1982)</h1>
        <img className="india" alt="indi" src="photo/rambo.jpg" />

        <button
          type="button"
          className="seen"
          onClick="location.href='pres_indiana.html'"
        >
          Déja Vu
        </button>
        <button
          type="button"
          className="look"
          onClick="location.href='rambo.html'"
        >
          Voir ce film
        </button>
      </div>
    </section>
  );
}

export default Rambo;
