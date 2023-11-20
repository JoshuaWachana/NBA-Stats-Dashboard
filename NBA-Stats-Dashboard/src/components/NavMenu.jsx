import { Link } from 'react-router-dom';

function NavMenu() {
  return (
    <div className="majorSection navMenu">
      <Link to="/" className="navItem">
        <img
          className="navItem__icon"
          src="../src/assets/stats.png"
          height="24px"
          width="24px"
          alt="Icon of Statistics"
        />
        <span>Player Stats</span>
        <img
          className="navItem__icon-arrow"
          src="../src/assets/arrow-right.png"
          height="15px"
          width="15px"
          alt="Icon of right arrow"
        />
      </Link>
      <Link to="/compare" className="navItem">
        <img
          className="navItem__icon"
          src="../src/assets/compare.png"
          height="24px"
          width="24px"
          alt="Icon of Comparisons"
        />
        <span>Player Comparisons</span>
        <img
          className="navItem__icon-arrow"
          src="../src/assets/arrow-right.png"
          height="15px"
          width="15px"
          alt="Icon of right arrow"
        />
      </Link>
      <Link to="/geo-maps" className="navItem">
        <img
          className="navItem__icon"
          src="../src/assets/geomap.png"
          height="24px"
          width="24px"
          alt="Icon of GeoMaps"
        />
        <span>GeoMaps</span>
        <img
          className="navItem__icon-arrow"
          src="../src/assets/arrow-right.png"
          height="15px"
          width="15px"
          alt="Icon of right arrow"
        />
      </Link>
    </div>
  );
}

export default NavMenu;
