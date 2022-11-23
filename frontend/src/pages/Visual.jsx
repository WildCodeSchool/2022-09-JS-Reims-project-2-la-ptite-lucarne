import React from "react";
import PropTypes from "prop-types";
import NavButton from "../components/NavButton";
import Movie from "../components/Movie";

export default function Visual({
  setCurrentPage,
  filtered,
  setMovieSeen,
  movieSeen,
  handleMovieSeen,
}) {
  return (
    <section className="popular-movies">
      {filtered[movieSeen] != null && (
        <>
          <h3 className="title-movie">{filtered[movieSeen].title}</h3>
          <div className="movie-container">
            <Movie
              setMovieSeen={setMovieSeen}
              movie={filtered[movieSeen]}
              movieId={filtered[movieSeen].id}
              moviePosterPath={filtered[movieSeen].poster_path}
              moviePath={filtered[movieSeen].path}
            />
            <NavButton
              setCurrentPage={setCurrentPage}
              handleMovieSeen={handleMovieSeen}
            />
          </div>
        </>
      )}
    </section>
  );
}
Visual.propTypes = {
  filtered: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
  movieSeen: PropTypes.number.isRequired,
  setMovieSeen: PropTypes.func.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  handleMovieSeen: PropTypes.func.isRequired,
};
