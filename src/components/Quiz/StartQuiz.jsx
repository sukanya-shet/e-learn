import React from "react";
import "./quiz.css";
function Quiz() {
  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          "https://img.freepik.com/free-vector/purple-background-with-quiz-word-colorful-people_52683-126.jpg?size=338&ext=jpg" +
          ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100%"
      }}
    >
      <div class="wrappers">
        <div class="welcome_text">
          <form class="welcome_form" name="welcome_form">
            <input type="text" name="name" />
            <button>Start Quiz</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
