import { Link } from "react-router";
import "./NavBar.css";
import { useSelector } from "react-redux";

const NavBar = () => {
  const favoriteCount = useSelector((state) => state.favoriteMovies.length);

  return (
    <div
      style={{ width: "100%", margin: 0, padding: 0 }}
      className="container-fluid p-1 d-flex justify-content-start"
    >
      <ul className="nav">
        <li className="nav-item">
          <Link to="/" className="nav-link fs-5 fw-bold text-white">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link fs-5 fw-bold text-white">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/profile" className="nav-link fs-5 fw-bold text-white">
            Profile
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/favorite" className="nav-link fs-5 fw-bold text-white">
            Favorite {favoriteCount > 0 && `(${favoriteCount})`}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
