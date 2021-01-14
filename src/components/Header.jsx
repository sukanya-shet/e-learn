import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
function Header() {
  return (
    <div className="header">
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          <LocalLibraryIcon /> Seekh
        </a>

        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ml-auto">
            <Link to="/home" style={{ textDecoration: "none" }}>
              <li class="nav-item ">
                <span class="nav-link">Home</span>
              </li>
            </Link>
            <Link to="/sign" style={{ textDecoration: "none" }}>
              <li class="nav-item">
                <span class="nav-link">Logout</span>
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
            <li class="nav-item">
              <span class="nav-link">Assignments</span>
            </li>
            <li class="nav-item">
              <span class="nav-link">Quiz</span>
            </li>
            <li class="nav-item">
              <span class="nav-link">Test</span>
            </li>
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