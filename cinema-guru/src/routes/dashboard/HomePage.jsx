import { useState, useEffect } from "react";
import "./dashboard.css";
import MovieCard from "../../components/movies/MovieCard";
import Filter from "../../components/movies/Filter";
import Button from "../../components/general/Button";
import api from "../../services/api";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [minYear, setMinYear] = useState(1970);
  const [maxYear, setMaxYear] = useState(2022);
  const [genres, setGenres] = useState([]);
  const [sort, setSort] = useState("");
  const [title, setTitle] = useState("");
  const [page, setPage] = useState(1);

  /* =========================
     LOAD MOVIES
  ========================== */
  const loadMovies = async (pageNumber = 1) => {
    try {
      const response = await api.get("/api/titles/advancedsearch", {
        params: {
          minYear,
          maxYear,
          genres: genres.join(","),
          title,
          sort,
          page: pageNumber,
        },
      });

      if (pageNumber === 1) {
        setMovies(response.data.titles);
      } else {
        setMovies(previous => [...previous, ...response.data.titles]);
      }

    } catch (error) {
      console.log(error);
    }
  };

  /* =========================
     EFFECT
  ========================== */
  useEffect(() => {
    setPage(1);
    loadMovies(1);
  }, [minYear, maxYear, genres, sort, title]);

  /* =========================
     LOAD MORE
  ========================== */
  const handleLoadMore = () => {
    const nextPage = page + 1;

    setPage(nextPage);
    loadMovies(nextPage);
  };

  return (
    <div id="content">

      {/* Filter */}
      <Filter
        minYear={minYear}
        setMinYear={setMinYear}
        maxYear={maxYear}
        setMaxYear={setMaxYear}
        sort={sort}
        setSort={setSort}
        genres={genres}
        setGenres={setGenres}
        title={title}
        setTitle={setTitle}
      />

      {/* Movies */}
      <ul id="movies-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbId}
            movie={movie}
          />
        ))}
      </ul>

      {/* Load More */}
      <div id="load-more-button">
        <Button
          type="button"
          label="Load More.."
          onClick={handleLoadMore}
        />
      </div>

    </div>
  );
}
