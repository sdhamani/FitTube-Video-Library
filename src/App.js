import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import PlayVideo from "./components/PlayVideo";
import LikedVideos from "./components/LikedVideos";
import History from "./components/History";
import WatchLater from "./components/WatchLater";
import Playlist from "./components/Playlist";
import PageNotFound from "./components/PageNotFound";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./Routes/PrivateRoute";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<PageNotFound />} />

        <Route path="/playvideo/:id" element={<PlayVideo />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <PrivateRoute path="/history" element={<history />} />
        <PrivateRoute path="/watchlater" element={<WatchLater />} />
        <PrivateRoute path="/playlist" element={<Playlist />} />
        <PrivateRoute path="/likedvideos" element={<LikedVideos />} />
      </Routes>
    </div>
  );
}

export default App;
