import React, { useState, useEffect } from "react";
import "./App.css";

import Movie from "./pages/Movie";
import Filter from "./components/Filter";
import Home from "./pages/Home";
import Question from "./components/Question";
import VisualDetails from "./pages/VisualDetails";
import Visual from "./pages/Visual";

function App() {
  const [myUrl, setMyUrl] = useState(
    `https://api.themoviedb.org/3/discover/movie&api_key=f365f4ddf79f3707857efed734c40500&language=fr&page=`
  );

  const [filtered, setFiltered] = useState([]);
  const [dejavu, setDejavu] = useState(0);
  const [currentPage, setCurrentPage] = useState("movie");

  const fetchPopular = async () => {
    const data = await fetch(myUrl);
    const movies = await data.json();
    setFiltered(movies.results);
  };

  useEffect(() => {
    fetchPopular();
  }, [myUrl]);

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
    <div>
      {currentPage === "movie" && (
        <Visual
          setCurrentPage={setCurrentPage}
          dejavu={dejavu}
          setDejavu={setDejavu}
          filtered={filtered}
          setMyUrl={setMyUrl}
        />
      )}
      {currentPage === "movieDetails" && (
        <VisualDetails
          setCurrentPage={setCurrentPage}
          dejavu={dejavu}
          setDejavu={setDejavu}
          filtered={filtered}
          setMyUrl={setMyUrl}
        />
      )}
    </div>
  );
}

export default App;
