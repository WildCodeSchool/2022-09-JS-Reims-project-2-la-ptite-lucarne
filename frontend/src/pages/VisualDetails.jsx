import PropTypes from "prop-types";
import MovieDetails from "../components/MovieDetails";
import NavDetails from "../components/NavDetails";

export default function Visual({
  setCurrentPage,
  filtered,
  setMovieSeen,
  movieSeen,
}) {
  return (
    <section className="popular-movies">
      <h3 className="title-movie">{filtered[movieSeen].title}</h3>
      <div className="movie-container-details">
        {filtered[movieSeen] != null && (
          <MovieDetails
            setMovieSeen={setMovieSeen}
            movieSeen={movieSeen}
            movie={filtered[movieSeen]}
            movieId={filtered[movieSeen].id}
            moviePosterPath={filtered[movieSeen].poster_path}
            moviePath={filtered[movieSeen].path}
            movieTitle={filtered[movieSeen].title}
            movieOverview={filtered[movieSeen].overview}
          />
        )}
      </div>
      <NavDetails setCurrentPage={setCurrentPage} />
    </section>
  );
}
Visual.propTypes = {
  filtered: PropTypes.arrayOf(PropTypes.number).isRequired,
  setMovieSeen: PropTypes.func.isRequired,
  movieSeen: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};
