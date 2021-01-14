import React from "react";
import "./about.css";
import Header from "/src/components/Header";

function About() {
  return (
    <div className="about">
      <Header />
      <section id="contact">
        <div class="container">
          <h1>Get in touch</h1>
          <div class="row">
            <div class="col-md-6">
              <form class="contact-form">
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Name" />
                </div>
                <div class="form-group">
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Phone number"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email id"
                  />
                </div>
                <div class="form-group">
                  <textarea
                    class="form-control"
                    rows="4"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button type="submit" class="btn btn-primary">
                  Send message
                </button>
              </form>
            </div>
            <div class="col-md-6 contact-info">
              <div class="follow">
                <b>Address: </b>
                <i class="fa fa-map-marker"></i> #123, 9th mile,
                Mangalore-03
              </div>
              <div class="follow">
                <b>Phone number: </b>
                <i class="fa fa-phone"></i> +080 23488734
              </div>

              <div class="follow">
                <b>Email: </b>
                <i class="fa fa-envelope-o"></i> seekheducation@gmail.com
              </div>

              <div class="follow">
                <label>
                  <b>Social Media: </b>
                </label>
                <a href="#">
                  <i class="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa fa-youtube-play"></i>
                </a>
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fa fa-google-plus"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default About;
