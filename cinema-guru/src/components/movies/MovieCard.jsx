import { useState, useEffect } from "react";
import "./movies.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faClock } from "@fortawesome/free-solid-svg-icons";
import api from "../../services/api";

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
          await api.delete(`/api/titles/favorite`, {
            data: { imdbId: movie.imdbId }
          });
          setIsFavorite(false);
        } else {
          await api.post(`/api/titles/favorite`, {
            imdbId: movie.imdbId
          });
          setIsFavorite(true);
        }
      }

      if (type === "watchlater") {
        if (isWatchLater) {
          await api.delete(`/api/titles/watchlater`, {
            data: { imdbId: movie.imdbId }
          });
          setIsWatchLater(false);
        } else {
          await api.post(`/api/titles/watchlater`, {
            imdbId: movie.imdbId
          });
          setIsWatchLater(true);
        }
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <li>

      <FontAwesomeIcon
        icon={faClock}
        className={`{isWatchLater ? "active" : ""}`}
        onClick={() => handleClick("watchlater")}
      />

      <FontAwesomeIcon
        icon={faHeart}
        className={isFavorite ? "active" : ""}
        onClick={() => handleClick("favorite")}
      />

      <h3>{movie.title}</h3>

      <p>{movie.synopsis}</p>

      {movie.genres?.map((g) => (
        <span key={g}>{g}</span>
      ))}

    </li>
  );
}
