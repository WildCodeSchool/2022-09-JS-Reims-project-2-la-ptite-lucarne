import React from "react";
import PropTypes from "prop-types";
import NavButton from "../components/NavButton";
import Movie from "../components/Movie";

export default function Visual({
  setCurrentPage,
  filtered,
  setDejavu,
  dejavu,
  handleDejavu,
}) {
  return (
    <section>
      <div className="popular-movies">
        {filtered[dejavu] != null && (
          <Movie
            setDejavu={setDejavu}
            movie={filtered[dejavu]}
            movieId={filtered[dejavu].id}
            moviePosterPath={filtered[dejavu].poster_path}
            moviePath={filtered[dejavu].path}
            movieTitle={filtered[dejavu].title}
          />
        )}
      </div>
      <NavButton setCurrentPage={setCurrentPage} handleDejavu={handleDejavu} />
    </section>
  );
}
Visual.propTypes = {
  filtered: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
  dejavu: PropTypes.number.isRequired,
  setDejavu: PropTypes.func.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  handleDejavu: PropTypes.func.isRequired,
};
