/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from "react";
import "./App.css";
import Movie from "./components/Movie";
import Filter from "./components/Filter";
// import Config from "./Config";

// récupère une partie déjà filtrée de l'API

function App() {
  const [genre, setGenre] = useState(" ");
  const [myUrl, setMyUrl] = useState(
    `https://api.themoviedb.org/3/discover/movie?with_genre=${genre}&api_key=f365f4ddf79f3707857efed734c40500&language=fr&page=`
  );
  const [filtered, setFiltered] = useState([]);

  // récupère les données de l'url et les affectent au states correspondants
  const fetchPopular = async () => {
    const data = await fetch(myUrl);
    const movies = await data.json();
    setFiltered(movies.results);
  };

  useEffect(() => {
    fetchPopular();
  }, [myUrl]);
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
        {filtered.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}

export default App;
