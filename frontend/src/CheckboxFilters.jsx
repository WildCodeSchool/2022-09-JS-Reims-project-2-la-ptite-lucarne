import React from "react";

function CheckboxFilters() {
  return (
    <section id="boxFilters">
      <form className="genreFilters">
        <h1>Genres</h1>
        <label>
          <input className="comedy" type="checkbox" />
          Comédie
        </label>
        <label>
          <input className="action" type="checkbox" />
          Action
        </label>
        <label>
          <input className="fantasy" type="checkbox" />
          SF-Fantastique
        </label>
        <label>
          <input className="horror" type="checkbox" />
          Horreur
        </label>
        <label>
          <input className="classic" type="checkbox" />
          Classique
        </label>
      </form>
      <form className="platformsFilters">
        <h1>Plateformes</h1>
        <label>
          <input className="netflix" type="checkbox" />
          Netflix
        </label>
        <label>
          <input className="primeVideo" type="checkbox" />
          Prime Video
        </label>
        <label>
          <input className="disneyPlus" type="checkbox" />
          Disney+
        </label>
        <label>
          <input className="ocs" type="checkbox" />
          OCS
        </label>
        <label>
          <input className="salto" type="checkbox" />
          Salto
        </label>
      </form>
    </section>
  );
}

export default CheckboxFilters;
