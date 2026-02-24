import "./dashboard.css";
import Header from "../../components/navigation/Header";

export default function Dashboard({
  userUsername,
  setIsLoggedIn,
}) {

  return (
    <div>

      <Header
        userUsername={userUsername}
        setIsLoggedIn={setIsLoggedIn}
      />

    </div>
  );
}
