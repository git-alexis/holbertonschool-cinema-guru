import { useEffect, useState } from "react";
import "./App.css";
import Authentication from "./routes/auth/Authentication";
//import Dashboard from "./components/";
import api from "./services/api";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (!token) return;

    api.post("/api/auth/")
      .then((response) => {
        setIsLoggedIn(true);
        setUserUsername(response.data.username);
      })
      .catch(() => {
        setIsLoggedIn(false);
        setUserUsername("");
        localStorage.removeItem("accessToken");
      });
  }, []);

  //if (isLoggedIn) {
    //return <Dashboard />;
  //}

  return (
    <Authentication
      setIsLoggedIn={setIsLoggedIn}
      setUserUsername={setUserUsername}
    />
  );
}
