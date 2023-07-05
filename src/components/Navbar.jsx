import React from "react";
import { Link } from "react-router-dom";
import { ImSearch } from "react-icons/im";
import netflixLogo from "../assets/netflix-logo.png";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar nav-left">
          <img
            src={netflixLogo}
            alt="netflixLogo"
            className="netflix-logo"
            onClick={() => window.location.reload()}
          />
          <Link to="/">TV Shows</Link>
          <Link to="/">Movies</Link>
          <Link to="/">Recently Added</Link>
          <Link to="/">My List</Link>
        </div>
        <ImSearch />
      </nav>
    </div>
  );
}

export default Navbar;
