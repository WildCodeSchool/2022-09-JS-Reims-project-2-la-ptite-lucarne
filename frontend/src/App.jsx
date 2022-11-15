import React, { useState, useEffect } from "react";
import "./App.css";
import VisualDetails from "./pages/VisualDetails";
import Visual from "./pages/Visual";

function App() {
  const [genre, setGenre] = useState(" ");
  const [myUrl, setMyUrl] = useState(
    `https://api.themoviedb.org/3/discover/movie?with_genre=${genre}&api_key=f365f4ddf79f3707857efed734c40500&language=fr&page=`
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
    <div>
      {currentPage === "movie" && (
        <Visual
          setCurrentPage={setCurrentPage}
          dejavu={dejavu}
          setDejavu={setDejavu}
          filtered={filtered}
          setGenre={setGenre}
          setMyUrl={setMyUrl}
        />
      )}
      {currentPage === "movieDetails" && (
        <VisualDetails
          setCurrentPage={setCurrentPage}
          dejavu={dejavu}
          setDejavu={setDejavu}
          filtered={filtered}
          setGenre={setGenre}
          setMyUrl={setMyUrl}
        />
      )}
    </div>
  );
}
export default App;
