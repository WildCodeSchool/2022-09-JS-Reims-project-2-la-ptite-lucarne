import React from "react";
import PropTypes from "prop-types";
import NavButton from "../components/NavButton";
import Movie from "../components/Movie";

export default function Visual({
  setCurrentPage,
  filtered,
  setDejavu,
  dejavu,
}) {
  return (
    <section>
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
  filtered: PropTypes.arrayOf(PropTypes.number).isRequired,
  setDejavu: PropTypes.func.isRequired,
  dejavu: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};
