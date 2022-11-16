import React, { useState, useEffect } from "react";
import "./App.css";
import Movie from "./pages/Movie";
import Filter from "./components/Filter";
import Home from "./pages/Home";
import Question from "./components/Question";

function App() {
  const [genre, setGenre] = useState(" ");
  const [myUrl, setMyUrl] = useState(
    `https://api.themoviedb.org/3/discover/movie?with_genre=${genre}&api_key=f365f4ddf79f3707857efed734c40500&language=fr&page=`
  );
  const [filtered, setFiltered] = useState([]);
  const [dejavu, setDejavu] = useState(0);
  const [show, setShow] = useState("home");
  // récupère les données de l'url et les affectent au states correspondants
  const fetchPopular = async () => {
    const data = await fetch(myUrl);
    const movies = await data.json();
    setFiltered(movies.results);
  };

  useEffect(() => {
    fetchPopular();
  }, [show, myUrl]);
  return (
    <>
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
              movieId={filtered[dejavu].id}
              movieBackdropPath={filtered[dejavu].backdrop_path}
              moviePath={filtered[dejavu].path}
              movieTitle={filtered[dejavu].title}
              movieOverview={filtered[dejavu].overview}
            />
          )}
        </div>
        {show === "home" && <Home setShow={setShow} nextTitle="test" />}
      </div>
      <div>
        <p>
          <Question />
        </p>
      </div>
    </>
  );
}

export default App;
