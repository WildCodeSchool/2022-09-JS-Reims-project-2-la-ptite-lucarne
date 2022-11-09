/* eslint-disable no-use-before-define */

import React, { useState, useEffect } from "react";
import "./App.css";
/* import Choix1 from "./pages/Choix1";
import Choix2 from "./pages/Choix2";
import Home from "./pages/Home"; */
import Movie from "@pages/Movie";
/* import MovieDetails from "./pages/MovieDetails"; */
import Filter from "./components/Filter";
// récupère une partie déjà filtrée de l'API

function App() {
  const [genre, setGenre] = useState(" ");
  const [myUrl, setMyUrl] = useState(
    `https://api.themoviedb.org/3/discover/movie?with_genre=${genre}&api_key=f365f4ddf79f3707857efed734c40500&language=fr&page=`
  );
  const [filtered, setFiltered] = useState([]);
  /* const [currentPage, setCurrentPage] = useState("home"); */
  const [dejavu, setDejavu] = useState(0);
  // récupère les données de l'url et les affectent au states correspondants
  const fetchPopular = async () => {
    const data = await fetch(myUrl);
    const movies = await data.json();
    setFiltered(movies.results);
  };

  useEffect(() => {
    fetchPopular();
  }, [myUrl]);
  /* let page = null;

  if (currentPage === "home") {
    page = <Home goTo={setCurrentPage} />;
  } else if (currentPage === "choix1") {
    page = <Choix1 goTo={setCurrentPage} />;
  } else if (currentPage === "choix2") {
    page = <Choix2 goTo={setCurrentPage} />;
  } else if (currentPage === "MovieDetails") {
    page = <MovieDetails />;
  } else {
    page = (
      <Movie
        goTo={setCurrentPage}
        data={filtered.find((movie) => movie.shortTitle === currentPage)}
      />
    );
  } */
  // Rendu visuel avec les filtres déjà fournis
  return (
    <div className="App">
      <h1>Movies</h1>
      <p>Filtres actuels : Par popularité</p>
      <Filter
        setFiltered={setFiltered}
        setMyUrl={setMyUrl}
        setGenre={setGenre}
        genre={genre}
      />
      <div className="popular-movies">
        {filtered[dejavu] != null && (
          <Movie
            setDejavu={setDejavu}
            dejavu={dejavu}
            movie={filtered[dejavu]}
            /* movieId={filtered[dejavu].id} */
            movieBackdropPath={filtered[dejavu].backdrop_path}
            moviePath={filtered[dejavu].path}
            movieTitle={filtered[dejavu].title}
            movieOverview={filtered[dejavu].overview}
          />
        )}
      </div>
    </div>
  );
}

export default App;
