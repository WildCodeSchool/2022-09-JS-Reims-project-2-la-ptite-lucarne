import React, { useEffect } from "react";const Filter = ({ popular, setFiltered, activeGenre, setActiveGenre }) => {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular); //Checks- don't do anything, just return all
      return;
    }
    const filtered = popular.filter((movie) =>
      movie.genre_ids.includes(activeGenre),
    );
    setFiltered(filtered);
  }, [activeGenre]);return (
    <div className="filter-container">
      <button
        onClick={() => setActiveGenre(0)}
        className={activeGenre === 0 ? "active" : ""}
      >
        All
      </button>
      <button
        onClick={() => setActiveGenre(28)}
        className={activeGenre === 28 ? "active" : ""}
      >
        Action
      </button>
      
      <button
        onClick={() => setActiveGenre(35)}
        className={activeGenre === 35 ? "active" : ""}
      >
        Comédie
      </button>
    </div>
  );
};export default Filter;