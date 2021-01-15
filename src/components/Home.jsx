import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";

function Home() {
  return (
    <div className="home">
      <div className="content">
        <div className="logo">
          <LocalLibraryIcon
            style={{
              fontSize: "80px",
              padding: "8px",
              borderRadius: "50%",
              border: "2px solid"
            }}
          />
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
