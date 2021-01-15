import React from "react";
import "./reg_log.css";
import GoogleLogin from "react-google-login";
import { Redirect, Link } from "react-router-dom";

function RegLog() {
  const [isLogin, setLogin] = React.useState(true);
  const [isReg, setReg] = React.useState(false);
  const [userLogged, setUserLogged] = React.useState(false);

  const [credentials, setCred] = React.useState({
    username: "",
    password: ""
  });

  const responseGoogle = (response) => {
    console.log(response.profileObj.name);
    var name = response.profileObj.name;
    if (name !== "") {
      alert("User succesfully logged in");
      setUserLogged(true);
    }
  };

  function showLogin() {
    setLogin(true);
    setReg(false);
  }
  function showReg() {
    setReg(true);
    setLogin(false);
  }
  function LoginSubmit(event) {
    console.log(credentials);
    fetch("http://127.0.0.1:8000/auth/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials)
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data.token);
      })
      .catch((error) => console.error(error));
  }
  function changeHandler(event) {
    const { name, value } = event.target;
    setCred((prev) => {
      if (name === "lusername") {
        return {
          username: value,
          password: prev.password
        };
      } else if (name === "lpassword") {
        return {
          username: prev.username,
          password: value
        };
      }
    });
  }

  if (userLogged) {
    return <Redirect to="/links" />;
  } else {
    return (
      <div class="container">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <span className="back">
            <i class="fas fa-chevron-left"></i>
            <span className="overlay"></span>
          </span>
        </Link>
        <div class="row">
          <div class="col-md-4">
            <div class="right">
              <div className="control-box">
                <div
                  onClick={showLogin}
                  className={
                    "controller " + (isLogin ? "selected-controller" : "")
                  }
                >
                  <h4>Login</h4>
                </div>
                <div
                  onClick={showReg}
                  className={
                    "controller " + (isReg ? "selected-controller" : "")
                  }
                >
                  <h4>Register</h4>
                </div>
              </div>
              <div className="card">
                {isLogin ? (
                  //------------LOGIN PART-----------//
                  <div className="login">
                    <form method="post" onSubmit={(e) => e.preventDefault()}>
                      <h1>Login</h1>
                      <input
                        onChange={changeHandler}
                        className="form-comp"
                        type="text"
                        placeholder="Username"
                        name="lusername"
                        minLength="2"
                        id="lname"
                        value={credentials.username}
                      />
                      <input
                        onChange={changeHandler}
                        className="form-comp"
                        type="password"
                        placeholder="Password"
                        name="lpassword"
                        id="lpassword"
                        minLength="4"
                        value={credentials.password}
                      />
                      <button
                        onClick={LoginSubmit}
                        className="reg_log_button"
                        type="submit"
                      >
                        Login
                      </button>
                      <h6
                        align="center"
                        href="/register"
                        style={{
                          color: "rgb(58, 135, 155)",
                          marginLeft: "10px",
                          marginBottom: "20px"
                        }}
                      >
                        or
                      </h6>
                      <GoogleLogin
                        clientId="347659199320-ui2ic09pfojpreo7ri5p3gocb0lu2ip7.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={"single_host_origin"}
                      />
                      ,
                    </form>
                  </div>
                ) : (
                  //----------REGISTRATION--------//
                  <div className="register">
                    <form
                      method="post"
                      onSubmit={(event) => event.preventDefault()}
                    >
                      <h1>Register</h1>

                      <input
                        className="form-comp"
                        type="text"
                        placeholder="Username"
                        id="rname"
                      />
                      <input
                        className="form-comp"
                        type="text"
                        placeholder="Email"
                        id="rmail"
                      />

                      <input
                        className="form-comp"
                        type="password"
                        placeholder="Password"
                        id="rpassword"
                      />

                      <input
                        className="form-comp"
                        type="password"
                        placeholder="Confirm Password"
                        id="rpassword2"
                      />

                      <button className="reg_log_button" type="submit">
                        Register
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div align="center" class="left">
              <img
                className="pic"
                src="https://image.freepik.com/free-vector/students-watching-recorded-lecture-with-professor-talking-from-tablet_335657-319.jpg"
                alt="online learning"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegLog;
