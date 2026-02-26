import "./dashboard.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "../../components/navigation/Header";
import SideBar from "../../components/navigation/SideBar";
import HomePage from "./HomePage";
import Favorites from "./Favorites";
import WatchLater from "./WatchLater";

export default function Dashboard({
  userUsername,
  setIsLoggedIn,
}) {
  return (
    <BrowserRouter>
      <div>

        {/* Header */}
        <Header
          userUsername={userUsername}
          setIsLoggedIn={setIsLoggedIn}
        />

        {/* Sidebar */}
        <SideBar />

        {/* Routing */}
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/watchlater" element={<WatchLater />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}
