import React, { Fragment } from "react";
import {Link} from "react-router-dom";
import "./details.css";
function Details() {
  return (
    <Fragment>
      <div className="container">
        <div className="row d-flex align-items-center mt-4 mb-4">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <span className="back">
          <i class="fas fa-chevron-left"></i>
          <span className="overlay"></span>
          </span>
          </Link>
          <h1 className="offer-head"><b>What we offer</b></h1>
       
          <div className="row">
            <div className="col-md-3">
              <div className="about-card">
                <img
                  src="https://i.pinimg.com/564x/21/ca/64/21ca6436f73bdb4cb4549e6dbca60ac8.jpg"
                  alt="vector"
                />
                <h2><b>Learn</b></h2>
                <div className="des">
                  Learn through interactive modules for better understanding of
                  concepts
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="about-card">
                <img
                  src="https://image.freepik.com/free-vector/electronic-devices-feedbacks-website-purchase-customer-review_335657-2467.jpg"
                  alt="vector"
                />
                <h2><b>Quiz</b></h2>
                <div className="des">
                  Put your knowledge into test by giving quizzes with a frame of
                  well-knit question series
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="about-card">
                <img
                  src="https://i.pinimg.com/564x/df/92/eb/df92eb0035b8ce6381d93a0e93544b31.jpg"
                  alt="vector"
                />
                <h2><b>Gold Mine</b></h2>
                <div className="des">
                  A collection of free online resources recommended by qualified mentors
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="about-card">
                <img
                  src="https://i.pinimg.com/564x/85/a6/79/85a679708773626668b05522c8b0d21d.jpg"
                  alt="vector"
                />
                <h2><b>Save Links</b></h2>
                <div className="des">
                  Don't go searching deep for missing links again, save all important links to webpages right here to find it in one click
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Details;
