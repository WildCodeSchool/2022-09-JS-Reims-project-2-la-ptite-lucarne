/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from "react";
import "./App.css";
import Movie from "./components/Movie";
import Filter from "./components/Filter";
import Config from "./Config";

// récupère une partie déjà filtrée de l'API

function App() {
  const url = Config.MY_API_KEY;
  // créé les states pour les filtres, genres, et popularité
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  useEffect(() => {
    fetchPopular();
  }, []);
  // récupère les données de l'url et les affectent au states correspondants
  const fetchPopular = async () => {
    const data = await fetch(url);
    const movies = await data.json();
    setPopular(movies.results);
    setFiltered(movies.results);
  };
  // Rendu visuel avec les filtres déjà fournis
  return (
    <div className="App">
      <header>
        <img className="logo" src="/src/assets/logo_rouge.png" alt="logo" />
      </header>
      <h1>Movies</h1>
      <p>
        Filtres actuels : Par popularité et comprenant au moins l'un des genres
        suivants : Aventure, Fantastique
      </p>
      <p>Mot-clé inclus : Elfes</p>
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <div className="popular-movies">
        {filtered.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
      <footer>
        <img src="/src/assets/copyright_logo.png" alt="copyrightLogo" />
        <p>Copyright 2022</p>
      </footer>
    </div>
  );
}

export default App;
