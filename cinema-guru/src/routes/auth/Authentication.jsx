import { useState } from "react";
import "./auth.css";
import Login from "./Login";
import Register from "./Register";

export default function Authentication({
  setIsLoggedIn,
  setUserUsername,
}) {
  const [_switch, setSwitch] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
      <form>

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
