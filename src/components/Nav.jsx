import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="container">
      <nav>
        Logo
        <ul className="nav-links">
          <Link to="/home">
            <li>Home</li>
          </Link>
          <Link to="/courses">
          <li>
           
              Free courses
            
          </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
export default Nav;
