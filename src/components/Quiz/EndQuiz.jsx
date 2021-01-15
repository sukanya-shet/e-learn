import React from "react";
import "./quiz.css";

function EndQuiz() {
  return (
    <div>
      <div class="wrapper">
        <div>
          <i class="fas fa-award award_icon"></i>
          <h1 class="userpoints">☆ ☆ ☆</h1>
          <h3 class="userpoints">
            Your Points: 7<span class="points"></span> /10
          </h3>

          <h5 class="usertime">
            {" "}
            Time taken: 30 <span class="time_taken"></span> sec
          </h5>
        </div>
      </div>
    </div>
  );
}
export default EndQuiz;
