import React from "react";
import "./quiz.css";
import { questions } from "./site";
import { Redirect } from "react-router-dom";
function PythonQ() {
  let time = 0;
  let mytime = 10;
  let question_count = 1;
  let points = 0;

  const [quest, setQuest] = React.useState(
    "Is Python case sensitive when dealing with identifiers?"
  );
  const [opt, setOpt] = React.useState(0);
  const [userAnswer, setUserAnswer] = React.useState(" ");
  const [isEnd, setEnd] = React.useState(false);
  let [first, second, third, fourth] = questions[opt].options;

  function handleClick(event) {
    setUserAnswer(event.target.value);
    console.log(event.target.value);
  }

  function next(event) {
    if (opt == questions.length - 1) {
      sessionStorage.setItem("time", time);
      clearInterval(mytime);
      setEnd(true);
      console.log(question_count);
    } else {
      //let user_answer = document.querySelector("li.option.active").dangerouslySetInnerHTML;
      //console.log(userAnswer);
      if (userAnswer == questions[opt].answer) {
        points += 1;
      }
      /* let user_answer = document.querySelector("li.option.active").innerHTML;

    if (user_answer == questions[question_count].answer) {
      points += 1;
      sessionStorage.setItem("points", points);
    }*/
      //console.log(points);
      setOpt(opt + 1);

      question_count++;
      show(opt - 1);
    }
  }

  React.useEffect(() => {}, []);

  function show(count) {
    let question = document.getElementById("questions");
    let [first, second, third, fourth] = questions[opt].options;

    /*
    question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;*/
    toggleActive();
  }

  function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
      option[i].onclick = function () {
        for (let i = 0; i < option.length; i++) {
          if (option[i].classList.contains("active")) {
            option[i].classList.remove("active");
          }
        }
        option[i].classList.add("active");
      };
    }
  }
  if (isEnd) {
    return <Redirect to="/endquiz" />;
  } else {
    return (
      <div className="quiz">
        <div class="wrapper">
          <div class="quiz">
            <div class="quiz_header">
              <div class="quiz_user">
                <h4>
                  Welcome! <span class="name"></span>
                </h4>
              </div>
              <div class="quiz_timer">
                <span class="time">{opt}</span>
              </div>
            </div>
            <div class="quiz_body">
              <div id="questions">
                <h3> {questions[opt].question}</h3>

                <div>
                  <li onClick={handleClick} class="option" value="answer">
                    {first}
                  </li>
                  <li onClick={handleClick} class="option" value={second}>
                    {second}
                  </li>
                  <li onClick={handleClick} class="option" value={third}>
                    {third}
                  </li>
                  <li onClick={handleClick} class="option" value={fourth}>
                    {fourth}
                  </li>
                </div>
              </div>

              <button class="btn-next" onClick={next}>
                Next Question
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PythonQ;
