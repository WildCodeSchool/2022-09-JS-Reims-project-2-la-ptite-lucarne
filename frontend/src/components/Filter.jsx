import React, { useState } from "react";
import PropTypes from "prop-types";

function Filter({ setMyUrl, setGenre, genre }) {
  const [pageSuivante, setPageSuivante] = useState(1);

  function setUrl(genreNum) {
    setMyUrl(
      `https://api.themoviedb.org/3/discover/movie?with_genres=${genreNum}&api_key=f365f4ddf79f3707857efed734c40500&language=fr&page=`
    );
    setGenre(genreNum);
    setPageSuivante(1);
  }

  const nextPage = () => {
    setPageSuivante(pageSuivante + 1);
    setMyUrl(
      `https://api.themoviedb.org/3/discover/movie?with_genres=${genre}&api_key=f365f4ddf79f3707857efed734c40500&language=fr&page=${
        pageSuivante + 1
      }`
    );
  };

  const previousPage = () => {
    if (pageSuivante === 1) {
      setPageSuivante(1);
      setMyUrl(
        `https://api.themoviedb.org/3/discover/movie?with_genres=${genre}&api_key=f365f4ddf79f3707857efed734c40500&language=fr&page=${pageSuivante}`
      );
    } else if (pageSuivante > 1) {
      setPageSuivante(pageSuivante - 1);
      setMyUrl(
        `https://api.themoviedb.org/3/discover/movie?with_genres=${genre}&api_key=f365f4ddf79f3707857efed734c40500&language=fr&page=${
          pageSuivante - 1
        }`
      );
    }
  };

  return (
    <div>
      <button type="button" onClick={() => setUrl(12)}>
        Genre Aventure
      </button>
      <button type="button" onClick={() => setUrl(28)}>
        Genre Action
      </button>

      <button type="button" onClick={() => nextPage()}>
        Page Suivante
      </button>
      <button type="button" onClick={() => previousPage()}>
        Page Précédente
      </button>
    </div>
  );
}
Filter.propTypes = {
  setMyUrl: PropTypes.func.isRequired,
  setGenre: PropTypes.func.isRequired,
  genre: PropTypes.string.isRequired,
};

export default Filter;
