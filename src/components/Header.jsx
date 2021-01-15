import React from "react";
import "./styles.css";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          <LocalLibraryIcon />
          Seekh
        </a>

        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ml-auto">
            <Link to="/home" style={{ textDecoration: "none" }}>
              <li class="nav-item ">
                <span class="nav-link">Home</span>
              </li>
            </Link>

            <Link to="/courses" style={{ textDecoration: "none" }}>
              <li class="nav-item">
                <span class="nav-link">Gold Mine</span>
              </li>
            </Link>
            <Link to="/links" style={{ textDecoration: "none" }}>
              <li class="nav-item">
                <span class="nav-link">Save Links</span>
              </li>
            </Link>
            <Link to="/quiz" style={{ textDecoration: "none" }}>
              <li class="nav-item">
                <span class="nav-link">Quiz</span>
              </li>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <li class="nav-item">
                <span class="nav-link">About us</span>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Header;
