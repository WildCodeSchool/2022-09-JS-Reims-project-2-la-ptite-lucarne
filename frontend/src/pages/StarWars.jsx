function StarWars() {
  return (
    <section>
      <div className="logo">
        <img className="Logo_site" alt="Logo" src="assets/logo_rouge.png" />
      </div>
      <div className="indiana">
        <h1>
          Star Wars
          <br />
          La menace fantome episode (1999)
        </h1>
        <img className="india" alt="indi" src="photo/starwars.jpeg" />

        <button
          type="button"
          className="seen"
          onClick="location.href='pres_indiana.html'"
        >
          Déja Vu
        </button>
        <br />
        <br />
        <button
          type="button"
          className="look"
          onClick="location.href='starwars.html'"
        >
          Voir ce film
        </button>
      </div>
    </section>
  );
}

export default StarWars;
