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
        <span className="navItem__text">Player Stats</span>
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
        <span className="navItem__text">Player Comparisons</span>
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
        <span className="navItem__text">GeoMaps</span>
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
