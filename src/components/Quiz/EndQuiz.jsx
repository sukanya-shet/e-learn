import React from "react";
import "./quiz.css";
import { Link } from "react-router-dom";
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";

function EndQuiz() {
  return (
    <div>
      <Header />
      <div class="wrapper">
        <div class="result" align="center">
          <h1 style={{ marginTop: "40px" }} class="userpoints">
            ☆ ☆ ☆
          </h1>
          <h2 class="userpoints">
            Your Score: 4<span class="points"></span> /10
          </h2>

          <h5 class="usertime">
            {" "}
            <span class="time_taken"></span>
          </h5>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default EndQuiz;
