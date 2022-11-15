import PropTypes from "prop-types";
import MovieDetails from "@components/MovieDetails";
import NavDetails from "@components/NavDetails";

export default function Visual({
  setCurrentPage,
  filtered,
  setDejavu,
  dejavu,
}) {
  return (
    <div className="App">
      <h1>Movies</h1>
      <p>Filtres actuels : Par popularité</p>
      <div className="popular-movies">
        {filtered[dejavu] != null && (
          <MovieDetails
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
      <NavDetails setCurrentPage={setCurrentPage} />
    </div>
  );
}
Visual.propTypes = {
  filtered: PropTypes.string.isRequired,
  setDejavu: PropTypes.func.isRequired,
  dejavu: PropTypes.string.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};
