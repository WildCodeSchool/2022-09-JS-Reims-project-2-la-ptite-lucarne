import PropTypes from "prop-types";
import NavButton from "@components/NavButton";
import React from "react";
import Movie from "../components/Movie";

export default function Visual({
  setCurrentPage,
  filtered,
  setDejavu,
  dejavu,
}) {
  return (
    <section>
      <h1>Movies</h1>
      <p>Filtres actuels : Par popularité</p>
      <div className="popular-movies">
        {filtered[dejavu] != null && (
          <Movie
            setDejavu={setDejavu}
            dejavu={dejavu}
            movie={filtered[dejavu]}
            movieId={filtered[dejavu].id}
            moviePosterPath={filtered[dejavu].poster_path}
            moviePath={filtered[dejavu].path}
            movieTitle={filtered[dejavu].title}
          />
        )}
      </div>
      <NavButton
        setCurrentPage={setCurrentPage}
        dejavu={dejavu}
        setDejavu={setDejavu}
      />
    </section>
  );
}
Visual.propTypes = {
  filtered: PropTypes.shape([PropTypes.number]).isRequired,
  setDejavu: PropTypes.func.isRequired,
  dejavu: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};
