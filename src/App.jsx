import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import Favorits from "./Pages/Favorits/Favorites";
import AllComic from "./Pages/AllComic/AllComic";
import AllPersonnages from "./Pages/AllPersonnages/AllPersonnages";
import Comic from "./Pages/Comic/Comic";
import Personnages from "./Pages/Personnages/Personnages";
import ComicCharacterId from "./Pages/ComicCharacterID/ComicCharacterId";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faKey,
  faListAlt,
  faCircleRight,
  faCircleLeft,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

library.add(faEnvelope, faKey, faListAlt, faCircleRight, faCircleLeft, faHouse);

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allpersonnages" element={<AllPersonnages />} />
        <Route path="/personnages/:characterId" element={<Personnages />} />
        <Route path="/allcomic" element={<AllComic />} />
        <Route path="comic/:comicId" element={<Comic />} />
        <Route path="/favorits" element={<Favorits />} />
        <Route
          path="/comicCharacterId/:characterId"
          element={<ComicCharacterId />}
        />
      </Routes>
    </Router>
  );
}

export default App;
