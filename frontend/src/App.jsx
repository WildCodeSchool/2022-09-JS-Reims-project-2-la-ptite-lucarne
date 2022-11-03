/* eslint-disable no-use-before-define */
import React, { useState } from "react";
import "./App.css";
import Choix1 from "./pages/Choix1";
import Choix2 from "./pages/Choix2";
import Home from "./pages/Home";
import Movie from "./pages/Movie";

// récupère une partie déjà filtrée de l'API

const movies = [
  {
    title: "Indiana Jones et le Royaume du Crâne de Cristal (2008)",
    shortTitle: "indiana",
    image: "./src/photo/indiana.jpg",
  },
  {
    title: "Rambo",
    shortTitle: "rambo",
    image: "./src/photo/rambo.jpg",
  },
];

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  let page = null;

  if (currentPage === "home") {
    page = <Home goTo={setCurrentPage} />;
  } else if (currentPage === "choix1") {
    page = <Choix1 goTo={setCurrentPage} />;
  } else if (currentPage === "choix2") {
    page = <Choix2 goTo={setCurrentPage} />;
  } else {
    page = (
      <Movie data={movies.find((movie) => movie.shortTitle === currentPage)} />
    );
  }

  return (
    <div className="App">
      <header>
        <img className="logo" src="/src/assets/logo_rouge.png" alt="logo" />
      </header>

      {page}

      <footer>
        <img src="/src/assets/copyright_logo.png" alt="copyrightLogo" />
        <p>Copyright 2022</p>
      </footer>
    </div>
  );
}

export default App;
