import React, { useEffect, useState } from "react";
import "./App.css";
import Movie from "./components/movie";
import Filter from "./components/filter";
//récupère une partie déjà filtrée de l'API

const App = () => {
  const url =
    "https://api.themoviedb.org/3/keyword/603/movies?with_genres=12&&28&&14&api_key=f365f4ddf79f3707857efed734c40500&language=fr";
    //créé les states pour les filtres, genres, et popularité
    const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]); 
  const [activeGenre, setActiveGenre] = useState(0);useEffect(() => {
    fetchPopular();
  }, []);
  //récupère les données de l'url et les affectent au states correspondants
   const fetchPopular = async () => {
   const data = await fetch(url);
   const movies = await data.json();
    console.log(movies);
    setPopular(movies.results);
    setFiltered(movies.results);
  };
  //Rendu visuel avec les filtres déjà fournis
  return (
    <div className="App">
      <h1>Movies</h1>
      <p>Filtres actuels : Par popularité et comprenant au moins l'un des genres suivants : Action, Aventure, Fantastique</p>
      <p>Mot-clé inclus : Elfes</p>
      <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
      <div className="popular-movies">
        {filtered.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};export default App;