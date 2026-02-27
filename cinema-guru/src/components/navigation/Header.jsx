import "./navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export default function Header({
  userUsername,
  setIsLoggedIn,
}) {

  const logout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
  };

  return (
    <nav id="header-nav">
      <p>Cinema Guru</p>

      <div>
        <img src="https://picsum.photos/100/100" alt="avatar"/>
        <p>Welcome, {userUsername}!</p>

        <span
          onClick={logout}
        >
          <FontAwesomeIcon icon={faRightFromBracket} />
          Logout
        </span>
      </div>

    </nav>
  );
}
