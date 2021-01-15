import React from "react";
import "./quiz.css";
import { Link } from "react-router-dom";
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";
function Quiz() {
  return (
    <div>
      <Header />
      <div
        style={{
          backgroundImage:
            "url(" +
            "https://cdn7.allevents.in/banners/926e8b60-4816-11ea-93d5-11106daf7f11-rimg-w519-h315-gmir.jpg?v=1580907237" +
            ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100%"
        }}
      >
        <div class="wrappers">
          <div class="welcome_text">
            <div class="welcome_form">
              <Link to="/startquiz">
                <button>Start Quiz</button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Quiz;
