import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Trailer from "./Trailer";

function MovieDetails({ movieTitle, moviePosterPath, movieId }) {
  const [trailerKey, setTrailerKey] = useState("");

  useEffect(() => {
    const fetchDetails = async () => {
      const myDetailedUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=fr`;

      const data = await fetch(myDetailedUrl);
      const videos = await data.json();
      for (let i = 0; i < videos.results.length; i += 1) {
        if (
          videos.results[i].official === true &&
          videos.results[i].type === "Trailer"
        ) {
          setTrailerKey(videos.results[i].key);
        }
      }
    };
    fetchDetails();
  }, [movieId]);

  return (
    <section>
      <h2>{movieTitle}</h2>
      <img
        className="imgdetails"
        alt={`Poster cannot be loaded ${movieId}`}
        src={`https://image.tmdb.org/t/p/w500${moviePosterPath}`}
      />
      {trailerKey != null && (
        <Trailer trailerKey={trailerKey} setTrailerKey={setTrailerKey} />
      )}
    </section>
  );
}

MovieDetails.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  moviePosterPath: PropTypes.string.isRequired,
  movieId: PropTypes.number.isRequired,
};

export default MovieDetails;
