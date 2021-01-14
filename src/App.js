import React from "react";
import "./styles.css";
import RegLog from "./components/log_reg/reg_log";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import FreeCourses from "./components/gold_mine/Gold_mine";
import LinkSave from "./components/LinkSaver/LinkSave";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Details from "./components/Details";
import PacmanLoader from "react-spinners/PacmanLoader";
import { css, jsx } from "@emotion/core";

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
        <div className="loader" style={{backgroundColor:
        "#fff",width:"100%"}}>
        <PacmanLoader
          color={"#0B0A0A"}
          loading={loading}
          css={css`
            display: flex;
            margin-top:300px;
            margin-left:45%;
            justify-content:center;
            align-items:center;
            text-align: center;
          `}
          size={50}
        /></div>
      ) : (
        <Router>
          <div className="App">
            <Header />
            <Switch>
              <Route path="/sign" component={RegLog} />
              <Route path="/" exact component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/courses" component={FreeCourses} />
              <Route path="/links" component={LinkSave}/> 
              <Route path="/details" component={Details}/>
            </Switch>
          </div>

          <Footer />
        </Router>
      )}
    </div>
  );
}
