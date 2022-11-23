import React, { useEffect, useState } from "react";
import "./style.css";
import VisualDetails from "./pages/VisualDetails";
import Visual from "./pages/Visual";
import Question from "./components/Question";
import allData from "./data/questionList";
import Home from "./pages/Home";

function App() {
  const [moviePage, setMoviePage] = useState(1);
  const [genre, setGenre] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [dejavu, setDejavu] = useState(0);
  const [currentPage, setCurrentPage] = useState("home");
  const [questNumber, setQuestNumber] = useState(0);

  const url =
    dejavu === 0
      ? `https://api.themoviedb.org/3/discover/movie?with_genres=${genre}&api_key=${
          import.meta.env.VITE_API_KEY
        }&language=fr&page=${moviePage}`
      : `https://api.themoviedb.org/3/discover/movie?with_genres=${genre}&pi_key=${
          import.meta.env.VITE_API_KEY
        }&language=fr&page=${moviePage + 1}`;

  const fetchPopular = async () => {
    const data = await fetch(url);
    if (data.status === 200) {
      const movies = await data.json();
      setFiltered(movies.results);
    } else {
      const errorBody = await data.json();
      console.error(errorBody, "with API key", import.meta.env.VITE_API_KEY);
    }
  };

  const handleDejavu = () => {
    if (dejavu === 19) {
      setMoviePage(moviePage + 1);
      setDejavu(0);
    } else {
      setDejavu(dejavu + 1);
    }
  };

  useEffect(() => {
    if (genre) {
      fetchPopular();
    }
  }, [genre, moviePage]);

  return (
    <>
      <header>
        <img className="logo" src="/src/assets/logo_rouge.png" alt="logo" />
      </header>
      <div>
        {currentPage === "movie" && (
          <Visual
            setCurrentPage={setCurrentPage}
            dejavu={dejavu}
            setDejavu={setDejavu}
            filtered={filtered}
            setMoviePage={setMoviePage}
            moviePage={moviePage}
            handleDejavu={handleDejavu}
          />
        )}
        {currentPage === "question" && (
          <Question
            questionData={allData[questNumber]}
            setQuestNumber={setQuestNumber}
            setCurrentPage={setCurrentPage}
            questNumber={questNumber}
            setGenre={setGenre}
          />
        )}
        {currentPage === "home" && <Home setCurrentPage={setCurrentPage} />}
        {currentPage === "movieDetails" && (
          <VisualDetails
            setCurrentPage={setCurrentPage}
            dejavu={dejavu}
            setDejavu={setDejavu}
            filtered={filtered}
          />
        )}
      </div>
    </>
  );
}

export default App;
