import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Trailer from "./Trailer";

function MovieDetails({ movieTitle, moviePosterPath, movieId, movieOverview }) {
  const [trailerKey, setTrailerKey] = useState("");
  const [movieRating, setMovieRating] = useState(0);
  let trailerAvailability = true;

  useEffect(() => {
    const fetchDetails = async () => {
      const myDetailedUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=fr`;
      const ratingUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=fr`;

      const data = await fetch(myDetailedUrl);
      const dataRatings = await fetch(ratingUrl);
      const ratings = await dataRatings.json();
      const videos = await data.json();

      for (let i = 0; i < videos.results.length; i += 1) {
        if (videos.results[i].type === "Trailer") {
          setTrailerKey(videos.results[i].key);
          trailerAvailability = true;
        }
        if (videos.results[1] === null) {
          trailerAvailability = false;
        }
      }
      setMovieRating(ratings.vote_average);
    };
    fetchDetails();
  }, [movieId, trailerKey]);

  return (
    <section>
      <h2>{movieTitle}</h2>
      <img
        className="imgdetails"
        alt={`Poster cannot be loaded ${movieId}`}
        src={`https://image.tmdb.org/t/p/w500${moviePosterPath}`}
      />
      {trailerAvailability === true && (
        <Trailer trailerKey={trailerKey} setTrailerKey={setTrailerKey} />
      )}
      <h3 className="bob">{movieOverview}</h3>
      <h4>{movieRating} / 10</h4>
    </section>
  );
}

MovieDetails.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  moviePosterPath: PropTypes.string.isRequired,
  movieId: PropTypes.number.isRequired,
  movieOverview: PropTypes.string.isRequired,
};

export default MovieDetails;
