import "./App.css";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import PlayVideo from "./components/PlayVideo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/playvideo" element={<PlayVideo />} />
      </Routes>
    </div>
  );
}

export default App;
