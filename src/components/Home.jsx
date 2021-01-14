import React from "react";
import "./home.css";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="content">
        <div className="logo">
          <i className="fas fa-book-reader"></i>
        </div>
        <div className="name">Seekh</div>
        <div>
          <div align="center" className="text">
            A one-stop integrated platform to make E-learning more exciting and
            fun
          </div>
          <Link to="/details" style={{ textDecoration: "none" }}>
          <span className="more">
          <i className="fas fa-angle-right"></i>
          <span className="overlay">Learn more</span>
          </span>
          </Link>
          <Link to="/sign" style={{ textDecoration: "none" }}>
            <span class="hustle-button pulsate">Let's hustle!</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
