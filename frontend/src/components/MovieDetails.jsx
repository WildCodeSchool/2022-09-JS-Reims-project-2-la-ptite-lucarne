import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function MovieDetails({ movieTitle, moviePosterPath, movieId }) {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      const myDetailedUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=f365f4ddf79f3707857efed734c40500&language=fr`;

      const data = await fetch(myDetailedUrl);
      const videos = await data.json();

      if (videos.type("Trailer") && videos.official(true)) {
        setDetails(videos.key);
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
      <h3>{details}</h3>
    </section>
  );
}

MovieDetails.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  moviePosterPath: PropTypes.string.isRequired,
  movieId: PropTypes.number.isRequired,
};

export default MovieDetails;
