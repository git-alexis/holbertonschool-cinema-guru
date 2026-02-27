import { useState, useEffect } from "react";
import "./dashboard.css";
import MovieCard from "../../components/movies/MovieCard";
import api from "../../services/api";

export default function WatchLater() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchWatchLater = async () => {
      try {
        const response = await api.get("/api/titles/watchlater");

        setMovies(response.data);

      } catch (error) {
        console.log(error);
      }
    };

    fetchWatchLater();
  }, []);

  return (
    <div id="content">

      <h1>MOVIES TO WATCH LATER</h1>

      <ul id="movies-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbId}
            movie={movie}
          />
        ))}
      </ul>

    </div>
  );
}
