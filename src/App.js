import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import PlayVideo from "./components/PlayVideo";
import LikedVideos from "./components/LikedVideos";
import History from "./components/History";
import WatchLater from "./components/WatchLater";
import Playlist from "./components/Playlist";
import PageNotFound from "./components/PageNotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/likedvideos" element={<LikedVideos />} />
        <Route path="/history" element={<History />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/playvideo/:id" element={<PlayVideo />} />
        <Route path="/playlist" element={<Playlist />} />
      </Routes>
    </div>
  );
}

export default App;
