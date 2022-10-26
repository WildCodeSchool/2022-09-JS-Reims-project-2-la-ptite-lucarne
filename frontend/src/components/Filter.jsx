import React from "react";
import PropTypes from "prop-types";

// créer les filtres supplémentaires, All, action et comédie

function Filter({ popular, setFiltered, activeGenre, setActiveGenre }) {
  const updateFilters = (newActiveGenre) => {
    setActiveGenre(newActiveGenre);

    if (newActiveGenre === 0) {
      setFiltered(popular);
      return;
    }
    const filtered = popular.filter((movie) =>
      movie.genre_ids.includes(newActiveGenre)
    );
    setFiltered(filtered);
  };
  return (
    <div className="filter-container">
      <button
        type="button"
        onClick={() => updateFilters(0)}
        className={activeGenre === 0 ? "active" : ""}
      >
        All
      </button>
      <button
        type="button"
        onClick={() => updateFilters(28)}
        className={activeGenre === 28 ? "active" : ""}
      >
        Action
      </button>
      <button
        type="button"
        onClick={() => updateFilters(35)}
        className={activeGenre === 35 ? "active" : ""}
      >
        Comédie
      </button>
    </div>
  );
}

Filter.propTypes = {
  setFiltered: PropTypes.func.isRequired,
  setActiveGenre: PropTypes.func.isRequired,
  popular: PropTypes.arrayOf(
    PropTypes.shape({
      genre_ids: PropTypes.arrayOf(PropTypes.number).isRequired,
    })
  ).isRequired,
  activeGenre: PropTypes.number.isRequired,
};

export default Filter;
