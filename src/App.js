import React from "react";
import "./styles.css";
import RegLog from "./components/log_reg/reg_log";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import LinkSave from "./components/LinkSaver/LinkSave";
import About from "./components/About";
import { Courses } from "./components/gold_mine/courses";
import Quiz from "./components/Quiz/StartQuiz";
import EndQuiz from "./components/Quiz/EndQuiz";
import PythonQ from "./components/Quiz/PythonQ";
import Details from "./components/Details";
import PacmanLoader from "react-spinners/PacmanLoader";
import { css } from "@emotion/core";

export default function App() {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div
          className="loader"
          style={{ backgroundColor: "#fff", width: "100%" }}
        >
          <PacmanLoader
            color={"#0B0A0A"}
            loading={loading}
            css={css`
              display: flex;
              margin-top: 300px;
              margin-left: 45%;
              justify-content: center;
              align-items: center;
              text-align: center;
            `}
            size={50}
          />
        </div>
      ) : (
        <Router>
          <div className="App">
            <Switch>
              <Route path="/sign" component={RegLog} />
              <Route path="/" exact component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/courses" component={Courses} />
              <Route path="/links" component={LinkSave} />
              <Route path="/details" component={Details} />
              <Route path="/quiz" component={Quiz} />
              <Route path="/startquiz" component={PythonQ} />
              <Route path="/endquiz" component={EndQuiz} />
            </Switch>
          </div>
        </Router>
      )}
    </div>
  );
}
