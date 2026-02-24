import { useState } from "react";
import "./auth.css";
import Login from "./Login";
import Register from "./Register";
import api from "../../services/api";

export default function Authentication({
  setIsLoggedIn,
  setUserUsername,
}) {
  const [_switch, setSwitch] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  /* =========================
     HANDLE SUBMIT
  ========================== */
  const handleSubmit = async (onSubmit) => {
    onSubmit.preventDefault();

    try {
      let response;

      if (_switch) {
        response = await api.post("/api/auth/login", {
          username,
          password,
        });
      } else {
        response = await api.post("/api/auth/register", {
          username,
          password,
        });
      }

      const token = response.data.accessToken;
      localStorage.setItem("accessToken", token);

      setUserUsername(username);
      setIsLoggedIn(true);

    } catch (error) {
      console.error("Authentication error:", error);
      alert("Authentication failed");
    }
  };

  return (
    <div>

      {/* HEADER */}
      <div>

        <span
          className={`${_switch ? "active" : ""}`}
          onClick={() => setSwitch(true)}
        >
          Sign In
        </span>

        <span
          className={`${!_switch ? "active" : ""}`}
          onClick={() => setSwitch(false)}
        >
          Sign Up
        </span>

      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit}>

        {_switch ? (
          <Login
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
          />
        ) : (
          <Register
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
          />
        )}

      </form>

    </div>
  );
}
