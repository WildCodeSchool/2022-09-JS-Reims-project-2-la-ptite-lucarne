import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Trailer from "./Trailer";

function MovieDetails({ movieTitle, moviePosterPath, movieId, movieOverview }) {
  const [trailerKey, setTrailerKey] = useState("");
  const [movieRating, setMovieRating] = useState(0);
  const [watchProviders, setWatchProviders] = useState([0]);

  useEffect(() => {
    const fetchDetails = async () => {
      const myDetailedUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=fr`;
      const ratingUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=fr`;
      const watchProviderUrl = `https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=fr`;

      const data = await fetch(myDetailedUrl);
      const dataRatings = await fetch(ratingUrl);
      const dataProviders = await fetch(watchProviderUrl);

      const ratings = await dataRatings.json();
      const videos = await data.json();
      const providers = await dataProviders.json();

      for (let i = 0; i < videos.results.length; i += 1) {
        if (videos.results[i].type === "Trailer") {
          setTrailerKey(videos.results[i].key);
        }
      }
      setWatchProviders(providers.results.FR.flatrate);
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
      <Trailer trailerKey={trailerKey} setTrailerKey={setTrailerKey} />
      <h3 className="bob">{movieOverview}</h3>
      <h4>{movieRating} / 10</h4>
      {watchProviders.map((provider) => (
        <img
          key={provider.provider_id}
          className="imgdetails"
          alt={`Aucune plateforme ne propose ce film en français ${movieId}`}
          src={`https://image.tmdb.org/t/p/w500${provider.logo_path}`}
        />
      ))}
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
