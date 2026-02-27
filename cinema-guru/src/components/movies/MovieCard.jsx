import { useState, useEffect } from "react";
import "./movies.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faClock } from "@fortawesome/free-solid-svg-icons";
import api from "../../services/api";
import popcorn from "../../assets/no-image.svg";

export default function MovieCard({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);

  /* =========================
     CHECK FAVORITES + WATCHLATER
  ========================== */
  useEffect(() => {
    const fetchLists = async () => {
      try {
        const favRes = await api.get("/api/titles/favorite");
        const wlRes = await api.get("/api/titles/watchlater");

        if (favRes.data.find(m => m.imdbId === movie.imdbId)) {
          setIsFavorite(true);
        }

        if (wlRes.data.find(m => m.imdbId === movie.imdbId)) {
          setIsWatchLater(true);
        }

      } catch (error) {
        console.log(error);
      }
    };

    fetchLists();
  }, [movie.imdbId]);

  /* =========================
     HANDLE CLICK
  ========================== */
  const handleClick = async (type) => {
  try {
    if (type === "favorite") {
      if (isFavorite) {
        await api.delete(`/api/titles/favorite/${movie.imdbId}`);
        setIsFavorite(false);
      } else {
        await api.post(`/api/titles/favorite/${movie.imdbId}`);
        setIsFavorite(true);
      }
    }

    if (type === "watchlater") {
      if (isWatchLater) {
        await api.delete(`/api/titles/watchlater/${movie.imdbId}`);
        setIsWatchLater(false);
      } else {
        await api.post(`/api/titles/watchlater/${movie.imdbId}`);
        setIsWatchLater(true);
      }
    }

  } catch (error) {
    console.log(error);
  }
};

  return (
  <li className="movie-card">

    <div className="movie-image-container">

      <img src={
        movie.imageurls && movie.imageurls.length > 0
          ? movie.imageurls[0]
          : popcorn
      }/>

      <div className="movie-icons">
        <FontAwesomeIcon
          icon={faClock}
          className={isWatchLater ? "active" : ""}
          onClick={() => handleClick("watchlater")}
        />
        <FontAwesomeIcon
          icon={faHeart}
          className={isFavorite ? "active" : ""}
          onClick={() => handleClick("favorite")}
        />
      </div>

      <div className="movie-title-overlay">
        <p>{movie.title}</p>
      </div>

    </div>

    <p className="movie-synopsis">{movie.synopsis}</p>

    <div className="movie-genres">
      {movie.genres?.map((g) => (
        <span key={g}>{g}</span>
      ))}
    </div>

  </li>
);
}
