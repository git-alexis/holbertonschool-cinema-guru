import "./dashboard.css";
import Header from "../../components/navigation/Header";
import SideBar from "../../components/navigation/SideBar";

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

      <SideBar />

    </div>
  );
}
