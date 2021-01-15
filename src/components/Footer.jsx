import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

function Footer() {
  return (
    <div className="footer">
      <div className="right">
        ©Copyright <b> Seekh </b> 2020. All rights reserved
      </div>
      <div className="left">
        <div className="social">
          <a href="#">
            {" "}
            <FacebookIcon />
          </a>
          <a href="#">
            {" "}
            <GitHubIcon />{" "}
          </a>
          <a href="#">
            {" "}
            <InstagramIcon />
          </a>
          <a href="#">
            <TwitterIcon />{" "}
          </a>
          <a href="#">
            {" "}
            <EmailIcon />{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
