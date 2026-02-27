import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faHeart,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import Activity from "../Activity";
import api from "../../services/api";

export default function SideBar() {
  const [selected, setSelected] = useState("home");
  const [small, setSmall] = useState(true);
  const [activities, setActivities] = useState([]);
  const [showActivities, setShowActivities] = useState(false);

  const navigate = useNavigate();

  /* ======================
     NAVIGATION
  ====================== */
  const setPage = (pageName) => {

    setSelected(pageName);

    switch (pageName) {
      case "home":
        navigate("/home");
        break;
      case "favorites":
        navigate("/favorites");
        break;
      case "watchlater":
        navigate("/watchlater");
        break;
      default:
        break;
    }
  };

  /* ======================
     FETCH ACTIVITIES
  ====================== */
  useEffect(() => {

    api.get("/api/activity")
      .then((response) => {
        setActivities(response.data);
      })
      .catch((error) => {
        console.log("Activities error:", error);
      });
  }, []);

  return (
    <nav
      className={small ? "small" : ""}
      onMouseEnter={() => setSmall(false)}
      onMouseLeave={() => setSmall(true)}
    >

      {/* MENU */}
      <ul>

        <li
          className={selected === "home" ? "active" : ""}
          onClick={() => setPage("home")}
        >
          <FontAwesomeIcon icon={faHouse} />
          <span>Home</span>
        </li>

        <li
          className={selected === "favorites" ? "active" : ""}
          onClick={() => setPage("favorites")}
        >
          <FontAwesomeIcon icon={faHeart} />
          <span>Favorites</span>
        </li>

        <li
          className={selected === "watchlater" ? "active" : ""}
          onClick={() => setPage("watchlater")}
        >
          <FontAwesomeIcon icon={faClock} />
          <span>Watch Later</span>
        </li>

      </ul>

      {/* ACTIVITIES */}
      <div id="latest-activities">
        <span>Latest Activities</span>
        <hr></hr>

        <ul>
          {activities.slice(0, 10).map((activity) => (
            <Activity
              key={activity.id}
              activity={activity}
            />
          ))}
        </ul>
      </div>

    </nav>
  );
}
