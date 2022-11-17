import PropTypes from "prop-types";
import MovieDetails from "../components/MovieDetails";
import NavDetails from "../components/NavDetails";

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
          <MovieDetails
            setDejavu={setDejavu}
            dejavu={dejavu}
            movie={filtered[dejavu]}
            movieId={filtered[dejavu].id}
            moviePosterPath={filtered[dejavu].poster_path}
            moviePath={filtered[dejavu].path}
            movieTitle={filtered[dejavu].title}
            movieOverview={filtered[dejavu].overview}
          />
        )}
      </div>
      <NavDetails setCurrentPage={setCurrentPage} />
    </section>
  );
}
Visual.propTypes = {
  filtered: PropTypes.arrayOf(PropTypes.number).isRequired,
  setDejavu: PropTypes.func.isRequired,
  dejavu: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};
