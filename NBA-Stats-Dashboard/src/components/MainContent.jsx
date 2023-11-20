import { Routes, Route } from "react-router-dom";
import PlayerStats from './PlayerStats';
import Comparison from './Comparison';
import GeoMaps from "./GeoMaps";

function MainContent() {
  return (
    <div className='majorSection mainContent'>
      <Routes>
        <Route path="/" element={<PlayerStats />}></Route>
        <Route path="/compare" element={<Comparison />}></Route>
        <Route path="/geo-maps" element={<GeoMaps />}></Route>
      </Routes >
    </div>
  );
}

export default MainContent;
