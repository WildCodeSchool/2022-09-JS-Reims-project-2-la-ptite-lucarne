/* eslint-disable no-use-before-define */
import React, { useState } from "react";
import "./App.css";
import Choix1 from "./pages/Choix1";
import Choix2 from "./pages/Choix2";
import Home from "./pages/Home";
// récupère une partie déjà filtrée de l'API

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  let page = <Home goTo={setCurrentPage} />;

  if (currentPage === "choix1") {
    page = <Choix1 goTo={setCurrentPage} />;
  } else if (currentPage === "choix2") {
    page = <Choix2 goTo={setCurrentPage} />;
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
