import React, { useState, useEffect } from "react";
import "./App.css";
import VisualDetails from "./pages/VisualDetails";
import Visual from "./pages/Visual";

function App() {
  const [myUrl, setMyUrl] = useState(
    `https://api.themoviedb.org/3/discover/movie?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=fr`
  );

  const [filtered, setFiltered] = useState([]);
  const [dejavu, setDejavu] = useState(0);
  const [currentPage, setCurrentPage] = useState("movie");

  const fetchPopular = async () => {
    const data = await fetch(myUrl);
    if (data.status === 200) {
      const movies = await data.json();
      setFiltered(movies.results);
    } else {
      const errorBody = await data.json();
      console.error(errorBody, "with API key", import.meta.env.VITE_API_KEY);
    }
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
