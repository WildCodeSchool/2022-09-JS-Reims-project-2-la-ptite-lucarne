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
      </form>
    </section>
  );
}

export default CheckboxFilters;
