import React from "react";

function CheckboxFilters() {
  return (
    <div className="filters">
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
    </div>
  );
}

export default CheckboxFilters;
