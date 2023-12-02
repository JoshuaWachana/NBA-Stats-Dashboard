import { Link } from "react-router-dom";
import "../styles/NavMenu.css";

function NavMenu() {
  return (
    <div className="majorSection navMenu">
      <Link to="/" className="navItem">
        <img
          className="navItem__icon"
          src="images/stats.png"
          height="24px"
          width="24px"
          alt="Icon of Statistics"
        />
        <span className="navItem__text">League Leaders</span>
        <img
          className="navItem__icon-arrow"
          src="images/arrow-right.png"
          height="15px"
          width="15px"
          alt="Icon of right arrow"
        />
      </Link>
      <Link to="/compare" className="navItem">
        <img
          className="navItem__icon"
          src="images/compare.png"
          height="24px"
          width="24px"
          alt="Icon of Comparisons"
        />
        <span className="navItem__text">Player Comparisons</span>
        <img
          className="navItem__icon-arrow"
          src="images/arrow-right.png"
          height="15px"
          width="15px"
          alt="Icon of right arrow"
        />
      </Link>
      <Link to="/geo-maps" className="navItem">
        <img
          className="navItem__icon"
          src="images/geomap.png"
          height="24px"
          width="24px"
          alt="Icon of GeoMaps"
        />
        <span className="navItem__text">Geo-Demographics</span>
        <img
          className="navItem__icon-arrow"
          src="images/arrow-right.png"
          height="15px"
          width="15px"
          alt="Icon of right arrow"
        />
      </Link>
    </div>
  );
}

export default NavMenu;
