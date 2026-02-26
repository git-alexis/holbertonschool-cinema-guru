import { useState, useEffect } from "react";
import "./dashboard.css";
import MovieCard from "../../components/movies/MovieCard";
import api from "../../services/api";

export default function Favorites() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await api.get("/api/titles/favorite");

        setMovies(response.data);

      } catch (error) {
        console.log(error);
      }
    };

    fetchFavorites();
  }, []);

  return (
    <div>

      <h1>MOVIES YOU LIKE</h1>

      <ul>
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
